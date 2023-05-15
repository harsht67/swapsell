import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { error, log } from 'console';
import { resolve } from 'dns';
import { url } from 'inspector';
import { promise } from 'protractor';
import { Order } from 'src/app/modals/Order';
import { PaymentService } from 'src/app/services/payment-service/payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {

//  @ViewChild('paypalRef',{static:true}) private paypalRef : ElementRef;
//  ngOnInit(): void {
//   console.log(window.paypal);
//   window.paypal.Buttons(
//     {
//       style:{
//         layout:'horizontal',
//         color:'blue',
//         shape:'rect',
//         label:'paypal'
//       },

//       createOrder:(data,actions) =>{
//         return actions.order.create({
//           purchase_units:[
//             {
//               amount : {
//                 value:'100',
//                 currency:'INR'
//               }
//             }
//           ]
//         })
//       },

//       onApprove:(data,actions)=>{
//         return actions.order.capture().then(details =>{
//           alert("Transaction completed");
//         });
//       },

//       onError:error =>{
//         console.log(error);
        
//       }

//     } 
//   ).render(this.paypalRef.nativeElement);
    
//   }
  




  
  // addScript:boolean =false;
  // payPalLoad : boolean = false;
  // finalAmount:number = 1;
  // paypalConfig = {
  //   env:'sandbox',
  //   client : {
  //     sandbox:'AcFxM4s-ajIUTPv04DAmjtF2DFM0ISHZhRdQBzGaUjbdRaY6vRO-oqimrPTEXffCKe2VML5KZUkAX0yF',
  //     production:'<your-production-key here>'
  //   },
  //   commit:true,
  //   payment:(data,actions) => {
  //     return actions.payment.create({
  //       payment:{
  //         transactions:[
  //           {amount:{total:this.finalAmount}}
  //         ]
  //       }
  //     })
  //   },
  //   onAuthorize:(data,actios) =>{
  //     return actios.payment.execute().then((payment) =>{
  //       // Do something after the payment is successfull
  //     })
  //   }
  // };

  // ngAfterViewChecked():void{
  //   if(!this.addScript){
  //     this.addPayPalScript().then(()=>{
  //       paypal.Button.render(this.paypalConfig,'#paypal-checkout-btn')
  //       this.payPalLoad=false
  //     })
  //   }
  // }

  // addPayPalScript(){
  //   this.addScript=true;
  //   return new Promise((resolve,reject)=>{
  //       let scriptTagElement = document.createElement('script');
  //       scriptTagElement.src = "http://www.paypalobjects.com/api/checkout.js";
  //       scriptTagElement.onload =resolve;
  //       document.body.appendChild(scriptTagElement);
  //   })
  // }

  submitForm(){
    console.log(this.orderData);
    this.paymentCheckOut();
    
  }
  constructor(private paymentService:PaymentService){
    
  }

  orderData:Order={
    price: 100,
    currency: 'USD',
    method: 'SALE',
    intent: 'PAYPAL',
    description: 'sell me'
  } 

  paymentCheckOut(){
    this.paymentService.createOrder(this.orderData).subscribe(data=>{
      // const redirectUrl = data.redirectUrl;
      const redirectUrl = data;
      console.log(JSON.stringify(redirectUrl));
      const redirectUrlObjToString = JSON.stringify(redirectUrl); 
      const parseObje = JSON.parse(redirectUrlObjToString);
      const theUrl = parseObje.redirectUrl;
      console.log(theUrl);
      window.location.href = theUrl;
    },error=>{
      console.error(error);  
    });
    
  }

  
 
}
