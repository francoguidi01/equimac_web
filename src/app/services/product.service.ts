import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private productList = new Array<Product>();
  private productsUrl = 'assets/products.json';
  private products: Product[] = [];

  constructor(private http: HttpClient) {
    //this.productList.push()
    this.loadProducts();
  }


  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }


  getById(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => products.find(product => product.id === id)),
      map(product => {
        if (product) {
          return product;
        } else {
          throw new Error('Producto no encontrado');
        }
      })
    );
  }

  private loadProducts(): void {
    this.http.get<Product[]>(this.productsUrl).subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  private normalize(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  
  searchProducts(query: string): Product[] {
    const normalizedQuery = this.normalize(query);
    const queryWords = normalizedQuery.split(' ');
  
    return this.products.filter(product => {
      if (product && product.name) {
        const normalizedProductName = this.normalize(product.name);
        return queryWords.every(word => normalizedProductName.includes(word));
      }
      return false;
    });
  }

  
}


