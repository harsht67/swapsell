import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(private router: Router) {}

  goToProductPage() {
    this.router.navigate(['/product']);
  }

}
