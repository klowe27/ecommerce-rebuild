import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CartService {
  cartProducts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.cartProducts = database.list('carts/${uid}');
  }

  getCart() {
    return this.cartProducts;
  }

}
