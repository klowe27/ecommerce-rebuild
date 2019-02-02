import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService, AuthenticationService]
})
export class CartComponent implements OnInit {
  cartItems;

  constructor(public authService: AuthenticationService, public cartService: CartService, private database: AngularFireDatabase) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.cartItems = null;
      } else {
        this.database.list(`carts/${user.uid}`).subscribe(cart =>{
          this.cartItems = cart;
        });
      }
    });
  }

  removeFromCart(itemToDelete) {
    this.cartService.removeFromCart(itemToDelete);
  }
}
