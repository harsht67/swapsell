import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  // temp placeholder
  products = [1,2,3,4,5];

  imgUrl = "../../../assets/";
  images = ["laptop.webp", "laptop.webp", "laptop.webp", "laptop.webp", "laptop.webp"];
  
}
