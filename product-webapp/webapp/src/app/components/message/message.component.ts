import { Component, Input } from '@angular/core';
import { Message } from 'src/app/modals/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  userId = "1234";

  @Input()
  message: Message
}
