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
  localCart: CartItem[] = [];
  // cartProducts: FirebaseListObservable<any[]>;

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
      return this.localCart;
    // }
  }

  addToCart(product, qty: number) {
    let cartItem = new CartItem(product, qty);
    // if (this.isLoggedIn) {
    //   let cart = this.database.list('carts/${this.user.uid}');
    //   cart.push({product: product, quantity: qty, color: color, size: size});
    // } else {
      this.localCart.push(cartItem);
    // }
    console.log(this.localCart);
  }
}
