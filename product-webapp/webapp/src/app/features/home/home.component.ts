import { Component } from "@angular/core";
import { Product } from "src/app/modals/product";
import { ProductService } from "src/app/services/product.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  products: Product[] = [];
  products1: Product[] = [];
  products2: Product[] = [];

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.productService.fetchProducts();
    this.productService.products$.subscribe((products) => {
      this.products = products;
      this.products1 = products?.slice(0, 4);
      this.products2 = products?.slice(4, 8);
    });
  }

  categories1 = [
    { name: "Automotive", image: "Automotive.jpg" },
    { name: "Real Estate", image: "RealEstate.jpg" },
    { name: "Electronics", image: "Electronics.jpg" },
    { name: "Home & Furniture", image: "HomeFurniture.jpg" },
  ];

  categories2 = [
    { name: "Automotive", image: "Automotive.jpg" },
    { name: "Real Estate", image: "RealEstate.jpg" },
    { name: "Electronics", image: "Electronics.jpg" },
    { name: "Home & Furniture", image: "HomeFurniture.jpg" },
  ];

  reviews = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      title: "Excellent platform for buying and selling",
      description:
        "SwapSell is an excellent platform for buying and selling second-hand goods. The website is user-friendly and offers a wide range of products at affordable prices. I've had multiple successful transactions on SwapSell, and the customer support is responsive and helpful. Highly recommended for anyone looking to buy or sell used items!",
    },
    {
      name: "Priya Patel",
      location: "Delhi, Delhi",
      title: "Great experience with SwapSell",
      description:
        "I have had a great experience using SwapSell for buying and selling second-hand products. The platform is easy to navigate, and I found the process of listing items to be hassle-free. I've sold several items quickly and purchased quality products at reasonable prices. SwapSell has become my go-to marketplace for second-hand deals.",
    },
    {
      name: "Sandeep Sharma",
      location: "Bengaluru, Karnataka",
      title: "Reliable and efficient",
      description:
        "SwapSell is a reliable and efficient platform for buying and selling second-hand goods. I appreciate the extensive range of products available and the ease of communication with sellers. The platform provides a safe environment for transactions, and I've had positive experiences with both buying and selling. I would definitely recommend SwapSell to others.",
    },
    {
      name: "Anita Verma",
      location: "Kolkata, West Bengal",
      title: "Impressive selection of products",
      description:
        "SwapSell offers an impressive selection of second-hand products. I've found unique items at great prices, and the quality has been excellent. The platform is intuitive, and the search filters make it easy to find what you're looking for. The community of buyers and sellers is active and helpful. I'm very satisfied with my experience on SwapSell.",
    },
  ];
  
}
