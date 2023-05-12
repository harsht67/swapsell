package com.stackroute.slotservice.controller;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import com.stackroute.slotservice.domain.Order;
import com.stackroute.slotservice.service.PayPalService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PayPalController {
    private final PayPalService payPalService;
    public  static  final  String SUCCESS_URL = "pay/success";
    public  static  final  String CANCEL_URL = "pay/cancel";


    public PayPalController(PayPalService payPalService) {
        this.payPalService = payPalService;
    }

    @PostMapping("/pay")
    public String payment(Order order){
        try {
            Payment payment = payPalService.createPayment(order.getPrice(), order.getCurrency(), order.getIntent(), order.getMethod(), order.getDescription(), "http://localhost:8084/" + CANCEL_URL, "http://localhost:8084/" + SUCCESS_URL);
            for (Links link : payment.getLinks()){
                if (link.getRel().equals("approval_url")){
                    return "redirect:"+link.getHref();
                }
            }
        } catch (PayPalRESTException e) {
            throw new RuntimeException(e);
        }
        return "redirect:/";
    }
}
