import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Message } from '../modals/message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  // url to fetch a chat between 2 participants 
  URL = "http://localhost:8081/swapsell/api";

  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  private messageAddedSubject: Subject<void> = new Subject<void>();

  // fetch user data 
  fetchUser(email: string) {
    this.http.get("http://localhost:8080/user/"+email).subscribe(data => {
      console.log("user data", data);
      this.userSubject.next(data);
    })
  }

  removeUser() {
    this.userSubject.next({});
  }

  // fetch all users who have contacted logged in user  
  getUsers(participantId: string): Observable<any> {
    const params = new HttpParams()
      .set('participantId', participantId)

    return this.http.get(`${this.URL}/chats/users`, { params });
  }

  getMessageAddedObservable(): Observable<void> {
    return this.messageAddedSubject.asObservable();
  }

  notifyMessageAdded(): void {
    this.messageAddedSubject.next();
  }

  // fetch chat between 2 users
  getChat(participantId1: string, participantId2: string): Observable<any> {
    const params = new HttpParams()
      .set('participantId1', participantId1)
      .set('participantId2', participantId2)

    return this.http.get(`${this.URL}/chats`, { params });
  }

  addMessage(message: Message) {
    return this.http.post(`${this.URL}/chats/messages`, message);
  }

}