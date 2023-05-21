import { Component, OnInit, HostListener } from "@angular/core";
import { ActivatedRoute, Route } from "@angular/router";
import { Subscription } from "rxjs";
import { Product } from "src/app/modals/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-result",
  templateUrl: "./product-result.component.html",
  styleUrls: ["./product-result.component.css"],
})
export class ProductResultComponent implements OnInit {

  products: Product[] = [];
  dropdown: boolean = false;
  dropdownValues = [
    "what's new",
    "recommended",
    "price - low to high",
    "price - high to low",
  ];
  sort: string = "recommended";

  filter: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  routeSubscription: Subscription;
  ngOnInit(): void {
    this.filter = window.innerWidth > 576;

    this.routeSubscription = this.route.queryParams.subscribe(params => {
      const keyword = params['keyword'];
      const type = params['type'];
      console.log(keyword);

      if(type == 'search') {
        this.productService.getProductsByKeyword(keyword).subscribe(products => {
          console.log(products);
          this.products = products;
        })
      }

      if(type == 'category') {
        this.productService.getProductsByCategory(keyword).subscribe(products => {
          console.log(products);
          this.products = products;
        })
      }

    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
  
  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    if (event.target.innerWidth > 576) {
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
