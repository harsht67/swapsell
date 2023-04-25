package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;

public interface UserService {
    User registerUserToApplication(User userDetails);
}
