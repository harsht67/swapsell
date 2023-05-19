package com.stackroute.emailservice.controller;

import com.stackroute.emailservice.dto.MailRequest;
import com.stackroute.emailservice.dto.MailResponse;
import com.stackroute.emailservice.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
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
        model.put("Name","John");
        model.put("location","Mumabi,Maharastra");
        return service.sendEmail(request,model);
    }
}
