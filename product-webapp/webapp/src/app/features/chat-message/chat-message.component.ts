import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Message } from 'src/app/modals/message';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService) {}

  @Input()
  participantId1: string;

  @Input()
  participantId2: string;

  messages = [];
  newMessage = "";
  currentDate: string;
  offer: boolean = false;
  dropdown: boolean = false;
  dropdownValues = ["Delete", "Mark as important"]

  private unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.fetchChat();

    this.userService.getMessageAddedObservable().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.fetchChat();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // ngOnChanges(): void {
  //   if(this.participantId1 && this.participantId2) {
  //     this.userService.getChat(this.participantId1, this.participantId2).subscribe(chat => {
  //       console.log(chat.data);
  //       this.messages = chat?.data.messages;
  //     });
  //   }
  // }

  fetchChat(): void {
    if (this.participantId1 && this.participantId2) {
      this.userService.getChat(this.participantId1, this.participantId2).subscribe(chat => {
        this.messages = chat?.data.messages;
      });
    }
  }

  sendMessage() {
    this.calculateCurrentDate();

    const newMessageObj: Message = {
      "senderId": this.participantId1,
      "receiverId": this.participantId2,
      "content": this.newMessage,
      "timestamp": this.currentDate
    }
    console.log(newMessageObj);

    this.userService.addMessage(newMessageObj).subscribe((response: any) => {
      if (response.success) {
        console.log("Added message successfully");
        this.newMessage = "";
        this.userService.notifyMessageAdded();
      }
      else {
        console.log("Error adding message")
      }
    });
  }

  calculateCurrentDate() {
    const dateObj = new Date();
    const day = dateObj.getDate();
    const month = this.getMonthName(dateObj.getMonth());
    const year = dateObj.getFullYear();

    this.currentDate = `${day} ${month} ${year}`;
  }

  getMonthName(month: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
  }

  // open/close dropdown
  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

  toggleOffer() {
    this.offer = !this.offer;
  }

  closeMessage() {
    this.participantId2 = "";
  }

}