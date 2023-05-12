import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css']
})
export class ChatMenuComponent implements OnInit {

  constructor(private userService: UserService) {}

  users = [];

  ngOnInit(): void {
    this.userService.getProducts().subscribe(
      data => this.users = data
    )
  }

}

// users = [
  //   {
  //     name: "Mob",
  //     lastMsg: "Hello, is it available?"
  //   },
  //   {
  //     name: "John Doe",
  //     lastMsg: "What's your last price?"
  //   },
  //   {
  //     name: "Mob",
  //     lastMsg: "Is it still available?"
  //   },
  //   {
  //     name: "Mob",
  //     lastMsg: "Okay"
  //   }
  // ];