import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartItem[];

  constructor(public cartService: CartService) {
    this.cartProducts = cartService.getCart();
  }

  ngOnInit() {
  }

}
