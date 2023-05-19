import { Component } from "@angular/core";
import { Product } from "src/app/modals/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchProducts();
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
  }

  categories1 = [
    "Vehicles",
    "Real Estate",
    "Electronics & Appliances",
    "Home & Furniture",
  ];
  categories2 = [
    "Books, Sports & Hobbies",
    "Mobiles",
    "Computers & Laptops",
    "Office",
  ];

  // products = [1, 2, 3, 4];
}
