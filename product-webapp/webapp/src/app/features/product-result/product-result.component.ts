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
  dropdownValues = [
    "what's new",
    "recommended",
    "price - low to high",
    "price - high to low"
  ]
  sort: string = "recommended"; 

  filter: boolean = true;

  // change sort value
  updateSort(newSort: string) {
    this.sort = newSort;
    this.toggleDropdown();
  }

  // open/close sort-dropdown
  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

}
