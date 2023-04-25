package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.repository.UserServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserServiceRepository userServiceRepository;
    @Autowired
    public UserServiceImpl(UserServiceRepository userServiceRepository) {
        this.userServiceRepository = userServiceRepository;
    }

    @Override
    public User registerUserToApplication(User userDetails) throws UserAlreadyExistsException {

        return null;
    }
}
