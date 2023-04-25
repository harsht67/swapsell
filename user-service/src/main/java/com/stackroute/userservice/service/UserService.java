package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;

public interface UserService {
    User registerUserToApplication(User userDetails) throws UserAlreadyExistsException;
}
