import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:8080/login";
  isLoggedIn: boolean = false;
  jwt: string = "";
  message: string = "";

  getStatus(): Observable<boolean> {
    return of(this.isLoggedIn);
  }

  login(user: User): Observable<boolean> {
    return this.http.post(this.URL, user).pipe(map(data => {

      console.log(data);

      let json = JSON.stringify(data);

      this.jwt = JSON.parse(json).token;
      this.message = JSON.parse(json).message;

      console.log(this.jwt, this.message);

      sessionStorage.setItem("jwt", this.jwt);
      sessionStorage.setItem("message", this.message);
      
      if(this.message === "Login Successful") {
        this.isLoggedIn = true;
        console.log("here", this.isLoggedIn);
      }
      else {
        this.isLoggedIn = false;
        console.log("here 2", this.isLoggedIn);
      }

      return this.isLoggedIn;

    }))  
  }

  logout(): void {
    this.isLoggedIn = false;
  } 

}
