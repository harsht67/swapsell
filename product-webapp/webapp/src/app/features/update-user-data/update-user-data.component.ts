import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user-data',
  templateUrl: './update-user-data.component.html',
  styleUrls: ['./update-user-data.component.css']
})
export class UpdateUserDataComponent {
  addressForm = this.fb.group({
    image:[null,Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    phoneNumber:[null,Validators.required],
    address: [null, Validators.required],
    phone: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    pincode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    productAge:[null,Validators.required],
    gender: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Andhra Pradesh'},
    {name: 'Arunachal Pradesh'},
    {name: 'Assam'},
    {name: 'Bihar' },
    {name: 'Chataftisgarh'},
    {name: 'Goa'},
    {name: 'Gujarat'},
    {name: 'Haryana'},
    {name: 'Himachal Pradesh'},
    {name: 'Karnataka'},
    {name: 'Kerala'},
    {name: 'Madhya Pradesh'},
    {name: 'Maharastra'},
    {name: 'Manipur'},
    {name: 'Meghalaya'},
    {name: 'Odisha'},
    {name: 'Nagaland'},
    {name: 'Punjab'},
    {name: 'Rajasthan'},
    {name: 'Sikkim'},
    {name: 'Tamil Nadu'},
    {name: 'Telangana'},
    {name: 'Uttarakand'},
    {name: 'Uttar Pradesh'},
    {name: 'West Bengal'},
    ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.addressForm.value);
    
  }
}
