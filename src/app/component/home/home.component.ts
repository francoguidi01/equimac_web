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
  constructor(private service: ProductService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.service.getById(productId);
    console.log(this.product)
    this.get_all()
  }
  get_all() {
    this.listProduct = this.service.getAll();
    this.listProduct.sort(() => Math.random() - 0.5);
    this.listProduct.splice(3);
    console.log(this.listProduct)
  }

}
