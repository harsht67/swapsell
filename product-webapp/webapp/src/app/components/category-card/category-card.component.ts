import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {

  constructor(
    private router: Router
  ) {}

  imgUrl = "../../../assets/";
  img = "laptop.jpg"

  @Input() 
  category: String;

  showResult() {
    const type = 'category';
    const keyword = this.category;
  
    this.router.navigate(['/result'], { queryParams: { type, keyword } });
  }
}
