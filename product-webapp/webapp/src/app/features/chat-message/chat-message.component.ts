import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {

  messages = [
    {  
      senderId: "5678",
      receiverId: "1234",
      content: "Hello, how are you?",
      timestamp: "11 May 2023"
    },
    {
      senderId: "1234",
      receiverId: "5678",
      content: "Hey there! I'm doing great, thanks. How about you?",
      timestamp: "11 May 2023"
    },
    {
      senderId: "5678",
      receiverId: "1234",
      content: "I'm doing well too. Just enjoying the day.",
      timestamp: "11 May 2023"
    },
    {
      senderId: "1234",
      receiverId: "5678",
      content: "That's wonderful to hear! It's always nice to enjoy the day.",
      timestamp: "11 May 2023"
    },
    {
      senderId: "5678",
      receiverId: "1234",
      content: "Indeed! Do you have any plans for the evening?",
      timestamp: "11 May 2023"
    },
    {
      senderId: "1234",
      receiverId: "5678",
      content: "Not really. Just thinking of relaxing at home. How about you?",
      timestamp: "11 May 2023"
    },
    {
      senderId: "5678",
      receiverId: "1234",
      content: "Indeed! Do you have any plans for the evening?",
      timestamp: "11 May 2023"
    },
    {
      senderId: "1234",
      receiverId: "5678",
      content: "Not really. Just thinking of relaxing at home. How about you?",
      timestamp: "11 May 2023"
    }
  ]

}
