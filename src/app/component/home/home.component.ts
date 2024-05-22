import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class HomeComponent {
  product: Product | null = new Product();
  listProduct: any;
  listProduct1: any;
  listProduct2: any;
  listProduct3: any;

  constructor(private service: ProductService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    
    window.scrollTo(0, 0); 
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.service.getById(productId);
    console.log(this.product)
    this.get_all()
  }
  get_all() {
    this.listProduct = this.service.getAll();
    this.listProduct.sort(() => Math.random() - 0.5);

    const third = Math.floor(this.listProduct.length / 3);
    this.listProduct1 = this.listProduct.slice(0, third);
    this.listProduct2 = this.listProduct.slice(third, 2 * third);
    this.listProduct3 = this.listProduct.slice(2 * third, this.listProduct.length);

    console.log(this.listProduct1);
    console.log(this.listProduct2);
    console.log(this.listProduct3);

  }
}
