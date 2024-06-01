import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isDarkMode: boolean = false;
  listProduct: any;
  filteredProducts: any;

  constructor(private productService: ProductService, private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.listProduct = this.productService.getAll();
    this.isDarkMode = this.darkModeService.getDarkMode(); 
  }

  ngAfterViewInit(): void {
    const darkModeToggle = document.getElementById('darkmode-toggle') as HTMLInputElement;
    if (darkModeToggle) {
      darkModeToggle.checked = this.isDarkMode;
    }
  }

  searchProducts(event: any) {
    const query = event.target.value;
    if (query) {
      this.filteredProducts = this.productService.searchProducts(query);
    } else {
      this.filteredProducts = [];
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeService.toggleDarkMode(this.isDarkMode);
  }
}
