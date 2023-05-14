import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { error } from 'console';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Order } from 'src/app/modals/Order';
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
    
  }

  orderData:Order={
    total: 0,
    currency: '',
    paymentMethod: '',
    intent: '',
    paymentDescription: ''
  } 
 
}
