package com.stackroute.slotservice.controller;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import com.stackroute.slotservice.domain.Order;
import com.stackroute.slotservice.service.PayPalService;
import org.springframework.web.bind.annotation.*;

@RestController
public class PayPalController {
    private final PayPalService payPalService;
    public  static  final  String SUCCESS_URL = "pay/success";
    public  static  final  String CANCEL_URL = "pay/cancel";


    public PayPalController(PayPalService payPalService) {
        this.payPalService = payPalService;
    }

    @GetMapping("/")
    public String home(){
        return "home";
    }

    @PostMapping("/pay")
    public String payment(Order order){
        try {
            Payment payment = payPalService.createPayment(order.getPrice(), order.getCurrency(), order.getIntent(), order.getMethod(), order.getDescription(), "http://localhost:8084/" + CANCEL_URL, "http://localhost:8084/" + SUCCESS_URL);
            System.out.println(payment);
            for (Links link : payment.getLinks()){
                if (link.getRel().equals("approval_url")){
                    return "redirect:"+link.getHref();
                }
            }
        } catch (PayPalRESTException e) {
            System.out.println(e.getMessage());
        }
        return "redirect:/";
    }

    @GetMapping(value = CANCEL_URL)
    public String cancelPay(){
        return "cancel";
    }

    @GetMapping(value = SUCCESS_URL)
    public String successPay(@RequestParam("paymentId") String paymentId,@RequestParam("PayerID") String payerId){
        try {
            Payment payment = payPalService.executePayment(paymentId, payerId);
            System.out.println(payment.toJSON());
            if (payment.getState().equals("approved")){
                return "success";
            }
        } catch (PayPalRESTException e) {
            System.out.println(e.getMessage());
        }
        return "redirect:/";

    }
}
