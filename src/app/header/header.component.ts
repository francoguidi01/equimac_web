import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
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
  isSearchActive: boolean = false;

@ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;


  constructor(private productService: ProductService, private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.listProduct = this.productService.getProducts();
    this.isDarkMode = this.darkModeService.getDarkMode(); 
  }

  ngAfterViewInit(): void {
    const darkModeToggle = document.getElementById('darkmode-toggle') as HTMLInputElement;
    if (darkModeToggle) {
      darkModeToggle.checked = this.isDarkMode;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!this.isSearchActive || target.closest('.search')) return;

    this.isSearchActive = false;
  }

  searchProducts(event: any) {
    const query = event.target.value;
    if (query) {
      this.filteredProducts = this.productService.searchProducts(query);
      this.isSearchActive = true; 
    } else {
      this.filteredProducts = [];
      this.isSearchActive = false;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeService.toggleDarkMode(this.isDarkMode);
  }
}
