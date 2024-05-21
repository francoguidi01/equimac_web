import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList = new Array<Product>();
 
  constructor() {
    this.productList.push(
      { id: 1, name: 'Product 1', image: '/assets/Machine3.jpg' },
      { id: 2, name: 'Product 2', image: '/assets/Machine2.jpg' },
      { id: 3, name: 'Product 3', image: '/assets/Machine3.jpg' },
      { id: 4, name: 'Product 4', image: '/assets/Machine3.jpg' },
      { id: 5, name: 'Product 5', image: '/assets/Machine2.jpg' },
      { id: 6, name: 'Product 6', image: '/assets/Machine3.jpg' },
      { id: 7, name: 'Product 7', image: '/assets/Machine3.jpg' },
      { id: 8, name: 'Product 8', image: '/assets/Machine2.jpg' },
      { id: 9, name: 'Product 9', image: '/assets/Machine2.jpg' },
      { id: 10, name: 'Product 10', image: '/assets/Machine3.jpg' })
  
  }


  getAll() {
    return this.productList;
  }


  getById(productId: number) {
    let products = this.productList.filter(product => { return product.id == productId })
    return (products.length > 0) ? products[0] : null;
  }
}
