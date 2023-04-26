package com.stackroute.authenticationservice.service;

import com.stackroute.authenticationservice.domain.User;
import com.stackroute.authenticationservice.exception.InvalidCredentialsException;
import com.stackroute.authenticationservice.exception.UserAlreadyExistException;
import org.springframework.stereotype.Service;

public interface UserService {
    User saveUser(User user) throws UserAlreadyExistException;
    User findByEmailAndPassword(String email, String password) throws InvalidCredentialsException;
}
