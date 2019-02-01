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
  uid: string;
  isLoggedIn;
  localCart: CartItem[];
  cartItems;

  constructor(private database: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.uid = user.uid;
        this.cartItems = database.list('carts/'+this.uid);
      }
    });
  }

  getCart() {
    this.cartItems;
  }

  addToCart(qty: number) {
    let cartItem = new CartItem(qty);
    if (this.isLoggedIn) {
      let cart = this.database.list(`carts/${this.uid}`);
      cart.push(cartItem);
    } else {
      this.localCart.push(cartItem);
    }
  }
}
