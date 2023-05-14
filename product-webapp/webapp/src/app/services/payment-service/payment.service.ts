import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/modals/Order';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl:string="http://localhost:8080/payment/";
  constructor(private httpClient:HttpClient) { }

  createOrder(orderData:Order):Observable<Order>{
    return this.httpClient.post<Order>(`${this.baseUrl}/pay`,orderData);
  }
}
