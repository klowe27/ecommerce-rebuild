import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService, CartService, AuthenticationService]
})
export class ProductDetailComponent implements OnInit {
  productId: string = "";
  productToDisplay: FirebaseObjectObservable<any>;
  size: string = "";
  color: string = "";
  imageToDisplay: string;
  showError: boolean = false;

  constructor(private route: ActivatedRoute, private location: Location, private productService: ProductService, private router: Router, private cartService: CartService, public authService: AuthenticationService,) { }

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
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.authService.login();
      } else if (!qty || !this.color || !this.size) {
        this.showError = true;
      } else {
        this.showError = false;
        this.productService.getProductById(this.productId).subscribe(product => {
          this.productToDisplay = product;
        });
        this.cartService.addToCart(this.productToDisplay, parseInt(qty), this.size, this.color);
        this.router.navigate(['cart']);
      }
    });
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
