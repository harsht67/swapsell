import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameter)=>{
      var paymentId:string = parameter.get("paymentId");
      var payerId :string = parameter.get("payerId");
      console.log(payerId + "  "+ paymentId);
      
    })
  }


}
