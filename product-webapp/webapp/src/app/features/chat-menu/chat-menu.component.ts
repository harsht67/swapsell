import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css']
})
export class ChatMenuComponent {

  users = [
    {
      name: "Mob",
      lastMsg: "Hello, is it available?"
    },
    {
      name: "John Doe",
      lastMsg: "What's your last price?"
    },
    {
      name: "Mob",
      lastMsg: "Is it still available?"
    },
    {
      name: "Mob",
      lastMsg: "Okay"
    }
  ];

}
