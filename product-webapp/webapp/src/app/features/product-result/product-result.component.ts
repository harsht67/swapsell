import { Component, OnInit, HostListener } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-result',
  templateUrl: './product-result.component.html',
  styleUrls: ['./product-result.component.css']
})
export class ProductResultComponent implements OnInit {

  products = [1,2,3,4,5,6,7,8];

  dropdown: boolean = false;
  dropdownValues = [
    "what's new",
    "recommended",
    "price - low to high",
    "price - high to low"
  ]
  sort: string = "recommended"; 

  filter: boolean = false; 

  // constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(
    //   data => this.products = data
    // )
    this.filter = window.innerWidth > 576;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth > 576) {
      this.filter = true;
    }
  }

  toggleFilter(newFilter: boolean) {
    this.filter = newFilter;
  }

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
