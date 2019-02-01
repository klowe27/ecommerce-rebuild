import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  cartItems: FirebaseListObservable<any[]>;

  constructor(public cartService: CartService) {
    this.cartItems = cartService.getCart();
    console.log(this.cartItems);
  }

  ngOnInit() {
  }

}
