import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService, CartService]
})
export class ProductDetailComponent implements OnInit {
  productId: string = "";
  productToDisplay: FirebaseObjectObservable<any>;
  size: string = "";
  color: string = "";
  imageToDisplay: string;

  constructor(private route: ActivatedRoute, private location: Location, private productService: ProductService, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
    });
    this.productService.getProductById(this.productId).subscribe(product => {
      this.productToDisplay = product;
      this.imageToDisplay = product.images[0];
    });
  }

  addToCart(qty: string){
    this.productService.getProductById(this.productId).subscribe(product => {
      this.productToDisplay = product;
    });
    this.cartService.addToCart(this.productToDisplay, parseInt(qty), this.size, this.color);
    this.router.navigate(['cart']);
  }

  selectSize(size) {
    this.size = size;
  }

  selectColor(color) {
    this.color = color;
  }

  changeImage(image) {
    this.imageToDisplay = image;
  }

}
