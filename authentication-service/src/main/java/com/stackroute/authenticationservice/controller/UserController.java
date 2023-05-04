package com.stackroute.authenticationservice.controller;

import com.stackroute.authenticationservice.domain.User;
import com.stackroute.authenticationservice.domain.UserLogin;
import com.stackroute.authenticationservice.exception.UserAlreadyExistException;
import com.stackroute.authenticationservice.security.JWTSecurityTokenGenerator;
import com.stackroute.authenticationservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JWTSecurityTokenGenerator tokenGenerator;

    public UserController(UserService userService, JWTSecurityTokenGenerator tokenGenerator) {
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistException {
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLogin user) {
        Map<String, String> token = new HashMap<>();

        if(userService.findByEmail(user.getEmail()).isEmpty()) {
            token.put("message", "No user found");
            return new ResponseEntity<>(token, HttpStatus.OK);
        }

        if(userService.findByEmailAndPassword(user.getEmail(), user.getPassword()).isEmpty()) {
            token.put("message", "Wrong Credentials");
            return new ResponseEntity<>(token, HttpStatus.OK);
        }

        token = tokenGenerator.createToken(user);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

}