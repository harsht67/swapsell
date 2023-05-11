import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  // for image gallery
  imgUrl = "../../../assets/";
  currentImage = 0;
  images = ["phone1.jpg", "phone2.jpg", "phone3.jpg", "phone4.jpg"];
  
  // for related products
  allProducts = [1,2,3,4,5,6];
  productsFrom = 0;
  productsN = 2;
  products = [1,2];


  // image slider - go to previous image
  prevImage() {
    if(this.currentImage > 0) {
      this.currentImage--;
      console.log(this.currentImage);
    }
  }

  // go to next image
  nextImage() {
    if(this.currentImage < this.images.length-1) {
      this.currentImage++;
      console.log(this.currentImage);
    }
  } 

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth < 576) {
      this.productsN = 2;
      this.products = this.allProducts.slice(this.productsFrom, this.productsN);
    }
    else {
      this.productsN = 5;
      this.products = this.allProducts.slice(this.productsFrom, this.productsN);
    }
  }

}
