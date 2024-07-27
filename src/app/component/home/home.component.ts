import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { DarkModeService } from '../../services/dark-mode.service';

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
  randomProducts: Product[] = [];
  isDarkMode: boolean = false;

  constructor(private service: ProductService, private route: ActivatedRoute, private darkModeService: DarkModeService) {
  }
  
  ngOnInit(): void {
    window.scrollTo(0, 0); 
    
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(productId).subscribe(
      (product) => {
        this.product = product;
        console.log(this.product);
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      }
    );
    console.log(this.product)
    this.get_all()

    this.isDarkMode = this.darkModeService.getDarkMode();

    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }
  
  get_all() {
    this.service.getProducts().subscribe(
      (products) => {
        this.listProduct = products;
        this.listProduct.sort(() => Math.random() - 0.5);
        this.randomProducts = this.listProduct.slice(0, 5);
        console.log(this.randomProducts);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

}
