import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class CartService {
  user;
  isLoggedIn;
  localCart: any[];
  cartProducts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  getCart() {
    if (this.isLoggedIn) {
      return this.cartProducts;
    } else {
      return this.localCart;
    }
  }

  addToCart(product: Product, qty: number, color: string, size: string) {
    if (this.isLoggedIn) {
      let cart = this.database.list('carts/${this.user.uid}');
      cart.push({product: product, quantity: qty, color: color, size: size});
    } else {
      this.localCart.push({product: product, quantity: qty, color: color, size: size})
    }
  }
}
