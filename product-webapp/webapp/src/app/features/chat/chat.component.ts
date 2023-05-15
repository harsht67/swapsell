import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  
  id: string = "9012";

  receiveId(id: string) {
    console.log("ID recieved in chat(parent): ", id);
    this.id = id;
    console.log("ID after update in chat(parent): ", this.id);
  }

}
