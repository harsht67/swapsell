import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories = [
    "Vehicles",
    "Real Estate",
    // "Electronics & Appliances",
    // "Jobs",
    // "Services",
    // "Home & Furniture",
    // "Fashion & Beauty",
    // "Kids",
    // "Pets",
    // "Books, Sports & Hobbies",
    // "Business & Industrial",
    // "Mobiles",
    // "Computers & Laptops"
  ];
  
  products = [1,2];

}
