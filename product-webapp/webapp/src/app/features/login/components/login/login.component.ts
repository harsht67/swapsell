import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modals/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  user: User = {
    email: "",
    password: "",
  }

  login() {
    this.authService.login(this.user).subscribe(isLoggedIn => {
      console.log('login comp', isLoggedIn);
  
      if (isLoggedIn) {
        alert('Welcome');
      } else {
        alert('No');
      }
    });
  }

}
