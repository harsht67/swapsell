import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL1 = "http://localhost:3000/users";
  URL = "http://localhost:8081/swapsell/api/chats";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.URL1);
  }

  getChats(): Observable<any> {
    return this.http.get(this.URL);
  }

  getChat(participantId: string): Observable<any> {
    console.log("ID in user service: ", participantId);
    return this.getChats().pipe(
      tap((chats: any[]) => {
        console.log(chats);
      }),
      map((chats: any[]) => {
        return chats.find((chat) => chat.participants.includes(participantId));
      })
    );
  }
  

}