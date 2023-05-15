import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    this.userService.getUsers().subscribe(
      data => this.users = data
    )
  }

  @Output()
  id = new EventEmitter<string>();

  goToMessage(id: string) {
    this.id.emit(id);
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