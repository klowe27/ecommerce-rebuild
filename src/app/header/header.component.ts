import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ResourceService } from '../resource.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService, ResourceService]
})
export class HeaderComponent {
  user;
  cartSize: number = 0;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private database: AngularFireDatabase, private router: Router, private resourceService: ResourceService) {
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

  goToCart() {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.authService.login();
      } else {
      this.router.navigate(['cart']);
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
