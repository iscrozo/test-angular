import { Component } from '@angular/core';
import { ProductModel } from '../model/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  product: ProductModel = {
    id: '1',
    image: 'assets/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla',
  };
}
