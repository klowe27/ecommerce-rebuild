import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CartService {
  localCart: any[];
  cartProducts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.cartProducts = database.list('carts/${uid}');
  }

  getCart() {
    return this.cartProducts;
  }

  addToCart(product: Product, qty: number, color: string, size: string) {
    this.localCart.push([product, qty, color, size])
  }
}
