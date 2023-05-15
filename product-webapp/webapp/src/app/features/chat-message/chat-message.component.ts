import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  constructor(private userService: UserService) {}

  @Input()
  id: string

  messages = []

  offer: boolean = false;

  dropdown: boolean = false;
  dropdownValues = [
    "Delete",
    "Mark as important"
  ]

  ngOnInit(): void {
    this.userService.getChat(this.id).subscribe(chat => {
      console.log(chat);
      this.messages = chat.messages;
    });
  }

  // open/close dropdown
  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

  toggleOffer() {
    this.offer = !this.offer;
  }

}