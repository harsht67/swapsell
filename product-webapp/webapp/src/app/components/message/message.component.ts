import { Component, Input } from '@angular/core';
import { Message } from 'src/app/modals/message';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor(private userService: UserService) {}

  @Input()
  message: Message

  @Input()
  userId: string;

  ngOnInit(): void {
    console.log(">>",this.userId,this.message.senderId);
    // this.userService.user$.subscribe(data => {
    //   console.log(">>", data.id, this.message.senderId);
    //   this.userId = data.id;
    // });
  }

}
