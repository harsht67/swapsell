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

  ngOnInit(): void {
    this.userService.getChat(this.id).subscribe(chat => {
      console.log(chat);
      this.messages = chat.messages;
    });
  }

}

// messages = [
//   {  
//     senderId: "5678",
//     receiverId: "1234",
//     content: "Hello, how are you?",
//     timestamp: "11 May 2023"
//   },
//   {
//     senderId: "1234",
//     receiverId: "5678",
//     content: "Hey there! I'm doing great, thanks. How about you?",
//     timestamp: "11 May 2023"
//   },
//   {
//     senderId: "5678",
//     receiverId: "1234",
//     content: "I'm doing well too. Just enjoying the day.",
//     timestamp: "11 May 2023"
//   },
//   {
//     senderId: "1234",
//     receiverId: "5678",
//     content: "That's wonderful to hear! It's always nice to enjoy the day.",
//     timestamp: "11 May 2023"
//   },
//   {
//     senderId: "5678",
//     receiverId: "1234",
//     content: "Indeed! Do you have any plans for the evening?",
//     timestamp: "11 May 2023"
//   },
//   {
//     senderId: "1234",
//     receiverId: "5678",
//     content: "Not really. Just thinking of relaxing at home. How about you?",
//     timestamp: "11 May 2023"
//   },
//   {
//     senderId: "5678",
//     receiverId: "1234",
//     content: "Indeed! Do you have any plans for the evening?",
//     timestamp: "11 May 2023"
//   },
//   {
//     senderId: "1234",
//     receiverId: "5678",
//     content: "Not really. Just thinking of relaxing at home. How about you?",
//     timestamp: "11 May 2023"
//   }
// ]