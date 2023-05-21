import { Component, OnInit } from '@angular/core';
import { UserObj } from 'src/app/modals/userObj';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {
  
  constructor(private userService: UserService) {}

  user: UserObj = {};

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      console.log(user);
      this.user = user;
    })
  }
}
