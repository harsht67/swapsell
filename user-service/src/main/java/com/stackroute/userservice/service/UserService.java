package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;

public interface UserService {
    User registerUserToApplication(User userDetails) throws UserAlreadyExistsException;
    User updateUserDetails(User userDetails) throws UserNotFoundException, UserAlreadyExistsException;
}
