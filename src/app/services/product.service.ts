import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList = new Array<Product>();
  constructor() {
    this.productList.push(
      { id: 1, name: 'Product 1', description: 'Description of Product 1' },
      { id: 2, name: 'Product 2', description: 'Description of Product 2' },
      { id: 3, name: 'Product 3', description: 'Description of Product 3' },
      { id: 4, name: 'Product 4', description: 'Description of Product 4' },
      { id: 5, name: 'Product 5', description: 'Description of Product 5' },
      { id: 6, name: 'Product 6', description: 'Description of Product 6' },
      { id: 7, name: 'Product 7', description: 'Description of Product 7' },
      { id: 8, name: 'Product 8', description: 'Description of Product 8' },
      { id: 9, name: 'Product 9', description: 'Description of Product 9' },
      { id: 10, name: 'Product 10', description: 'Description of Product 10' })
  }


  getAll() {
    return this.productList;
  }


  getById(productId: number) {
    let products = this.productList.filter(product => { return product.id == productId })
    return (products.length > 0) ? products[0] : null;
  }
}
