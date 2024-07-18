import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private service: ProductService, private darkModeService: DarkModeService) { }


  isDarkMode: boolean = false;
  listProduct: Product[] = [];
  pagedProducts: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12;

  ngOnInit(): void {
    window.scrollTo(0, 0); 
    
    this.getAllProducts();

    this.isDarkMode = this.darkModeService.getDarkMode();

    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }

  getAllProducts() {
    this.listProduct = this.service.getAll();
    this.listProduct.sort((a, b) => a.name.localeCompare(b.name));
    this.setPage(1);
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedProducts = this.listProduct.slice(startIndex, endIndex);

    window.scrollTo(0, 0);

    const element = document.getElementById('productsComponent');
    if (element) {
      element.scrollIntoView();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.listProduct.length / this.itemsPerPage);
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }


  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + ' ...';
    }
    return text;
  }

}
