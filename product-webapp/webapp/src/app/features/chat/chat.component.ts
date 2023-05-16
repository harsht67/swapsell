import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  
  // id: string = "9012";

  participantId1: string = "1234"; // get this from logged user 
  participantId2: string = ""; // id of other user 

  receiveId(id: string) {
    console.log("ID recieved in chat(parent): ", id);
    this.participantId2 = id;
    console.log("ID after update in chat(parent): ", this.participantId2);
  }

}
