package com.stackroute.slotservice.controller;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import com.stackroute.slotservice.domain.Order;
import com.stackroute.slotservice.service.PayPalService;
import com.stackroute.slotservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pay")
public class PayPalController {

    private final PayPalService payPalService;
    private final UserService userService;
    public  static  final  String SUCCESS_URL = "pay/success";
    public  static  final  String CANCEL_URL = "cancel";

    @Autowired
    public PayPalController(PayPalService payPalService, UserService userService) {
        this.payPalService = payPalService;
        this.userService = userService;
    }

    @GetMapping("/home")
    public String home(){
        return "home";
    }

    @PostMapping("/payment")
    public ResponseEntity<String> payment(@RequestBody Order order){
        try {
            Payment payment = payPalService.createPayment(order.getPrice(), order.getCurrency(), order.getIntent(), order.getMethod(), order.getDescription(), "http://localhost:8084/" + CANCEL_URL, "http://localhost:8084/" + SUCCESS_URL);
            for (Links link : payment.getLinks()){
                System.out.println(link);
                if (link.getRel().equals("approval_url")){
                    System.out.println("in if of the controller");
//                    return "redirect: "+link.getHref();
                    String redirectUrl = link.getHref();
                    System.out.println(redirectUrl);
                    return ResponseEntity.ok().body("{\"redirectUrl\": \"" + redirectUrl + "\"}");
                }

            }
        } catch (PayPalRESTException e) {
            System.out.println(e.getMessage());
        }
        return ResponseEntity.ok().body("{\"redirectUrl\": \"}");
    }

    @GetMapping(value = CANCEL_URL)
    public String cancelPay(){
        return "cancel";
    }

    @GetMapping("/success")
    public ResponseEntity<?> successPay(@RequestParam("paymentId") String paymentId,@RequestParam("PayerID") String payerId) throws PayPalRESTException {

            System.out.println("in the success pay method");
            Payment payment = payPalService.executePayment(paymentId, payerId);
            System.out.println("In the controller -- 2");
            System.out.println(payment.toJSON());
            System.out.println("**********************************************************************************");
            String email = payment.getPayer().getPayerInfo().getEmail();
            System.out.println("**********************************************************************************");

            if (payment.getState().equals("approved")){
                userService.UpdateUserTransaction(email,payment);
                return  new ResponseEntity<>("success", HttpStatus.ACCEPTED);
            }else{
//                return  new ResponseEntity<>("not success working on this ", HttpStatus.CONFLICT);
            }
            return new ResponseEntity<>(payment,HttpStatus.ACCEPTED);
    }
}
//http://localhost:8084/pay/success?paymentId=PAYID-MRQ35SA3ML81454R6588811T&token=EC-3UG99674EB373210Y&PayerID=PPUHLD9R6ADME