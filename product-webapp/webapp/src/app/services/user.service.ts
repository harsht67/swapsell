import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // URL = "http://localhost:3000/users";

  // url to fetch a chat between 2 participants 
  URL = "http://localhost:8081/swapsell/api";

  constructor(private http: HttpClient) {}

  participantId1 = "1234"; // get this from auth service later (logged user id) 

  getUsers(): Observable<any> {
    const params = new HttpParams()
      .set('participantId', this.participantId1)

    return this.http.get(`${this.URL}/chats/users`, { params });
  }

  getChat(participantId2: string): Observable<any> {
    const params = new HttpParams()
      .set('participantId1', this.participantId1)
      .set('participantId2', participantId2)

    return this.http.get(`${this.URL}/chats`, { params });
  }

}