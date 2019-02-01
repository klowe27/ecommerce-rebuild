import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { CartItem } from './cart-item.model';


@Injectable()
export class CartService {
  user;
  isLoggedIn;
  cartItems: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, public afAuth: AngularFireAuth) {
    // this.user = afAuth.authState;
    // this.user.subscribe(user => {
    //   if (user == null) {
    //     this.isLoggedIn = false;
    //   } else {
    //     this.isLoggedIn = true;
    //   }
    // });
  }

  getCart() {
    // if (this.isLoggedIn) {
    //   return this.cartProducts;
    // } else {
      return this.cartItems;
    // }
  }

  addToCart(productId, qty: number) {
    let cartItem = new CartItem(productId, qty);
    console.log(cartItem);
    // if (this.isLoggedIn) {
    //   let cart = this.database.list('carts/${this.user.uid}');
    //   cart.push({product: product, quantity: qty, color: color, size: size});
    // } else {
      this.cartItems = this.database.list('carts/0')
      this.cartItems.push(cartItem);
    // }
  }
}
