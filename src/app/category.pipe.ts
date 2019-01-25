import {Pipe, PipeTransform} from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../product.service';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Product[], category){

    let output: Product[] = [];

    if (category == "T-Shirt" || category == "Sweatshirt" || category == "Accessory" || category == "Tank") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === category) {
          output.push(input[i]);
        }
      }
    } else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].featured === true) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
