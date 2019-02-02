import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService]
})
export class HeaderComponent {
  user;
  active: string;
  cartSize: number = 0;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private database: AngularFireDatabase) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.database.list(`carts/${user.uid}`).subscribe(cart =>{
          this.cartSize = cart.length;
        });
      }
    });
    }

  menuClick(menuItem: string){
    this.active = menuItem;
    console.log(this.active)
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
