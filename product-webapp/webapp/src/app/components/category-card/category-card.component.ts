import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {

  imgUrl = "../../../assets/";
  img = "laptop.jpg"

  @Input() 
  category: String;
}
