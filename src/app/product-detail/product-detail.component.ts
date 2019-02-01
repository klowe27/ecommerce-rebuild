import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService, CartService]
})
export class ProductDetailComponent implements OnInit {
  productId: string = "";
  productToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private productService: ProductService, private router: Router, private cartService: CartService,) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
    });
    this.productToDisplay = this.productService.getProductById(this.productId);
  }

  addToCart(qty: number){
    this.cartService.addToCart(this.productToDisplay, qty);
    this.router.navigate(['cart']);
  }

}
