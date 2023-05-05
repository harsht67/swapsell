import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-an-ad',
  templateUrl: './post-an-ad.component.html',
  styleUrls: ['./post-an-ad.component.css']
})
export class PostAnAdComponent {
  addressForm = this.fb.group({
    category:[null,Validators.required],
    title:[null,Validators.required],
    productName:[null,Validators.required],
    Description:[null,Validators.required],
    price:[null,Validators.required],
    ageIndays:[null,Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Andhra Pradesh', abbreviation: 'AP'},
    {name: 'Arunachal Pradesh', abbreviation: ''},
    {name: 'Assam', abbreviation: 'AS'},
    {name: 'Bihar', abbreviation: 'AZ'},
    {name: 'Chattisgarh', abbreviation: 'AR'},
    {name: 'Goa', abbreviation: 'CA'},
    {name: 'Gujarat', abbreviation: 'CO'},
    {name: 'Haryana', abbreviation: 'CT'},
    {name: 'Himachal Pradesh', abbreviation: 'DE'},
    {name: 'Karnataka', abbreviation: 'DC'},
    {name: 'Kerala',abbreviation: 'FM'},
    {name: 'Madhya Pradesh', abbreviation: 'FL'},
    {name: 'Maharastra', abbreviation: 'GA'},
    {name: 'Manipur', abbreviation: 'GU'},
    {name: 'Meghalaya', abbreviation: 'HI'},
    {name: 'Odisha', abbreviation: 'ID'},
    {name: 'Nagaland', abbreviation: 'IL'},
    {name: 'Punjab', abbreviation: 'IN'},
    {name: 'Rajasthan', abbreviation: 'IA'},
    {name: 'Sikkim', abbreviation: 'KS'},
    {name: 'Tamil Nadu', abbreviation: 'KY'},
    {name: 'Telangana', abbreviation: 'LA'},
    {name: 'Uttarakand', abbreviation: 'ME'},
    {name: 'Uttar Pradesh', abbreviation: 'MH'},
    {name: 'West Bengal', abbreviation: 'MD'},
   
  ];
  category=[
    {name:"car"},
    {name:"Laptop"},
    {name:"Mobile pone"},
    {name:"bike"},
    {name:"Books"},
    {name:"Electonic gadgets"},
    {name:"Sofa set"},
    {name:"home utensils"},
  ]

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
