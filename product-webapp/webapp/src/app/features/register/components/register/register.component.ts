import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }

  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""    
  }

  isPasswordDiff:boolean = true;
  checkPassword() {
    if(this.user.password === this.user.confirmPassword)
      this.isPasswordDiff = false; 
      else
        this.isPasswordDiff = true;
    console.log(this.isPasswordDiff,this.user.password,this.user.confirmPassword)
  }

}
