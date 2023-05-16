import { Component, Input, OnChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnChanges {

  constructor(private userService: UserService) {}

  @Input()
  participantId1: string
  @Input()
  participantId2: string

  messages = []

  offer: boolean = false;

  dropdown: boolean = false;
  dropdownValues = [
    "Delete",
    "Mark as important"
  ]

  ngOnChanges(): void {

    this.userService.getChat(this.participantId1, this.participantId2).subscribe(chat => {
      console.log(chat.data);
      this.messages = chat.data.messages;
    });

  }

  // open/close dropdown
  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

  toggleOffer() {
    this.offer = !this.offer;
  }

  closeMessage() {

  }

}