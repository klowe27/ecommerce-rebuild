import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model'
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ProductService]

})
export class ShopComponent implements OnInit {
  products: Product[];
  filterByCategory = null;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  goToProductPage(clickedProduct: Product){
    this.router.navigate(['shop', clickedProduct.id]);
  }

  onChange(category) {
    this.filterByCategory = category;
  }
}
