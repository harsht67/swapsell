package com.stackroute.userservice.controller;

import com.stackroute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserServiceController {
    private final UserService userService;
    @Autowired
    public UserServiceController(UserService userService) {
        this.userService = userService;
    }
}
