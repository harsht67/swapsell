import { Component } from '@angular/core';

@Component({
  selector: 'app-product-result',
  templateUrl: './product-result.component.html',
  styleUrls: ['./product-result.component.css']
})
export class ProductResultComponent {

  // temp placeholder data
  products = [1,2,3,4,5,6,7,8,9];

  dropdown: boolean = false;

  // open/close sort-dropdown
  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

}
