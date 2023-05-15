import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.URL+"/users");
  }

  getChats(): Observable<any> {
    return this.http.get(this.URL+"/chats");
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