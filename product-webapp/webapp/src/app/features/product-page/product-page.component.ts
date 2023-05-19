import { Component, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/modals/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  // for image gallery
  imgUrl = "../../../assets/";
  currentImage = 0;
  images = ["phone1.jpg", "phone2.jpg", "phone3.jpg", "phone4.jpg"];
  productId: string;
  product: Product;
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'];
      console.log("Product page - product id: ", this.productId);
      this.getProduct();
    });
  }

  getProduct(): void {
    this.productService.getProductById(this.productId).subscribe(
      product => {
        console.log(product);
        this.product = product;
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }

  // image slider - go to previous image
  prevImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
      console.log(this.currentImage);
    }
  }

  // go to next image
  nextImage() {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
      console.log(this.currentImage);
    }
  }
}
