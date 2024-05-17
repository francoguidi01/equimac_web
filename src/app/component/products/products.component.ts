import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private service: ProductService) { }
  listProduct: any;
  ngOnInit(): void {
    this.get_all()
  }


  get_all() {
    this.listProduct = this.service.getAll()
    console.log(this.listProduct)
  }


  create_a_product(): void {
    const product: Product = new Product(1, 'Product 1', 'Description of Product 1');
    console.log(product);
  }


}
