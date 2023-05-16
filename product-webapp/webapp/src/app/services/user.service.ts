import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL1 = "http://localhost:3000/users";

  // url to fetch a chat between 2 participants 
  URL = "http://localhost:8081/swapsell/api";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.URL1);
  }

  getChat(participantId: string): Observable<any> {
    const params = new HttpParams().set('participantId', participantId)

    return this.http.get(`${this.URL}/chats`, { params });
  }

}