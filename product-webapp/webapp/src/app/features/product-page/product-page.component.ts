import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  imgUrl = "../../../assets/";
  images = ["laptop.webp", "laptop.webp", "laptop.webp", "laptop.webp", "laptop.webp"];
  
}
