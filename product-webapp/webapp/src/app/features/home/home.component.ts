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
  products1: Product[] = [];
  products2: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchProducts();
    this.productService.products$.subscribe(products => {
      this.products = products;
      this.products1 = products?.slice(0,4);
      this.products2 = products?.slice(4,8);
    });
  }

  categories1 = [
    "Automotive",
    "Real Estate",
    "Electronics",
    "Home & Furniture",
  ];
  categories2 = [
    "Books, Sports & Hobbies",
    "Mobiles",
    "Computers & Laptops",
    "Office",
  ];
  
}
