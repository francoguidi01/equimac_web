import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  product: Product | null = null;
  isDarkMode: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService, 
    private darkModeService: DarkModeService
  ) { }
  

  ngOnInit() {
    // Maneja los cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadProduct();
    });
  
    // Carga inicial del producto
    this.loadProduct();
  
    // Manejo del modo oscuro
    this.isDarkMode = this.darkModeService.getDarkMode();
    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }
  
  private loadProduct() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error('Error al cargar el producto:', error);
        // Aquí puedes manejar el error, por ejemplo, redirigiendo a una página de error
      }
    );
  }

}
