package com.stackroute.slotservice.controller;

import com.stackroute.slotservice.service.PayPalService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PayPalController {
    private final PayPalService payPalService;

    public PayPalController(PayPalService payPalService) {
        this.payPalService = payPalService;
    }


}
