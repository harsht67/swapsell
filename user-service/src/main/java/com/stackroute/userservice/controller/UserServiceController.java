package com.stackroute.userservice.controller;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserServiceController {
    private final UserService userService;
    @Autowired
    public UserServiceController(UserService userService) {
        this.userService = userService;
    }

//    @PostMapping("/registerUser")
//    public ResponseEntity<?> registerUser(@RequestBody Us user){
//        try {
//            User userDetails = userService.registerUserToApplication(user);
//            return new ResponseEntity<>(userDetails,HttpStatus.CREATED);
//        } catch (UserAlreadyExistsException e) {
//            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
//        }
//    }
    @PutMapping("/updateDetails")
    public ResponseEntity<?> updateUserDetails(@RequestBody User user){
        try {
            User updateUserDetails = userService.updateUserDetails(user);
            return new ResponseEntity<>(updateUserDetails,HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("/deleteUser/{emailId}")
    public ResponseEntity<?> deleteUser(@PathVariable String emailId){
        try {
            userService.deleteUser(emailId);
            return new ResponseEntity<>("User with "+emailId +"removed from database",HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.CONFLICT);
        }
    }
}
