package com.stackroute.emailservice.controller;

import com.stackroute.emailservice.dto.MailRequest;
import com.stackroute.emailservice.dto.MailResponse;
import com.stackroute.emailservice.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class EmailController {
    @Autowired
    private EmailService service;

    @PostMapping("/sendingEmail")
    public MailResponse sendMail(@RequestBody MailRequest request){
        Map<String,Object> model = new HashMap<>();
        model.put("productName","Samsung Galaxy F5jd model-903");
        model.put("productTitle","Brand new just bought 2 months back");
        model.put("productDescription"," 4GB RAM | 64 GB ROM | Expandable Upto 1 TB\n" +
                "16.56 cm (6.52 inch) HD+ Display\n" +
                "8MP Dual Rear Camera | 5MP Front Camera\n" +
                "5000 mAh Battery\n" +
                "Helio G36 Processor");
        model.put("productCategory","Smart Phone");
        model.put("productCondition","Good");
        model.put("payeeEmail","Cristophersamji@gmail.com");
        model.put("amountPaid","₹ 12,000");
        model.put("totalAmountPaid","₹ 12,000");
        return service.sendEmail(request,model);

    }

    @GetMapping("/email")
    public ResponseEntity<?> mailService(){
        return new ResponseEntity<>("In email service ", HttpStatus.ACCEPTED);
    }
}
