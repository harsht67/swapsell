import { Component, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/modals/product";
import { Seller } from "src/app/modals/seller";
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
  images = ["", "-1", "-2", "-3"];
  productId: string;
  product: Product;
  products1: Product[] = [];
  products2: Product[] = [];
  seller: Seller = {};

  ngOnInit(): void {
    this.productService.products$.subscribe(products => {
      this.products1 = products?.slice(0,4);
      this.products2 = products?.slice(4,8);
    });

    this.route.queryParams.subscribe(params => {
      this.scrollToTop();
      this.currentImage = 0;
      this.productId = params['id'];
      console.log("Product page - product id: ", this.productId);
      this.getProduct();
      this.getSeller();
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  getSeller(): void {
    this.productService.fetchSellerForProduct(this.productId).subscribe(
      data => {
        console.log(data);
        this.seller = data;
      }
    )
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
