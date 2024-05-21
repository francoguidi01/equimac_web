import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})


export class ProductViewComponent {

  product: Product | null = new Product();
  constructor(private service: ProductService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.service.getById(productId);
    console.log(this.product)
  }
}
