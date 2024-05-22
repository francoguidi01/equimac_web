import { Component} from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  listProduct: any;
  filteredProducts: any;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.listProduct = this.productService.getAll();


  }

  searchProducts(event: any) {
    const query = event.target.value;
    if (query) {
      this.filteredProducts = this.productService.searchProducts(query);
    } else {
      this.filteredProducts = [];
    }
  }

}

