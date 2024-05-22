import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product | null = new Product();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // Suscribirse a los cambios en la ruta para detectar cuando se cambie el ID del producto
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Obtener el nuevo ID del producto de la URL
      let productId = Number(this.route.snapshot.paramMap.get('id'));
      // Cargar los datos del nuevo producto
      this.product = this.productService.getById(productId);
    });

    // Cargar los datos del producto cuando se inicializa el componente
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getById(productId);
  }

}
