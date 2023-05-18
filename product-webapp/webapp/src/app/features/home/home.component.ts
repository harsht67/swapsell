import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories1 = [
    "Vehicles",
    "Real Estate",
    "Electronics & Appliances",
    "Home & Furniture"
  ];

  categories2 = [
    "Books, Sports & Hobbies",
    "Mobiles",
    "Computers & Laptops",
    "Office"
  ]
  
  products = [1,2,3,4];

}
