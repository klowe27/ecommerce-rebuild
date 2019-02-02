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
      }
    });
  }

  addToCart(qty){
    let newItem = new CartItem(qty);
    let cart = this.database.list(`carts/${this.uid}`);
    cart.push(newItem);
  }
}
