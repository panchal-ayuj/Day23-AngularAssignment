import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchQuery: string = '';

  constructor(private router: Router) { }

  searchProducts() {
    const productType = this.determineProductType(this.searchQuery);

    if (productType) {
      this.router.navigate([`${productType}`]);
    } else {
      console.error('Invalid product type or no product type found.');
    }
  }

  private determineProductType(searchQuery: string): string | null {

    if (searchQuery.length > 2) {
      if ('television'.indexOf(searchQuery.toLowerCase()) !== -1) {
        return '/product/television';
      }
      if ('laptop'.indexOf(searchQuery.toLowerCase()) !== -1) {
        return '/product/laptop';
      }
      if ('mobile phone'.indexOf(searchQuery.toLowerCase()) !== -1) {
        return '/product/mobile-phone';
      }
    }
    return null;
  }
}
