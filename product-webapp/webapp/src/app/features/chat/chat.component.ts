import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  
  // participantId1: string = "1234"; // get this from logged user 
  participantId: string = ""; // id of other user 

  receiveId(id: string) {
    console.log("ID recieved in chat(parent): ", id);
    this.participantId = id;
    console.log("ID after update in chat(parent): ", this.participantId);
  }

}
