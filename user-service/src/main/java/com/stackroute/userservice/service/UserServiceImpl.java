package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.repository.UserServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserServiceRepository userServiceRepository;

    @Autowired
    public UserServiceImpl(UserServiceRepository userServiceRepository) {
        this.userServiceRepository = userServiceRepository;
    }

    boolean checkExistingUser(User user) throws UserAlreadyExistsException {
        Optional<User> userByEmail = userServiceRepository.findUserByEmail(user.getEmail());
        boolean userNotExists = true;
        if (userByEmail.isPresent()) {
            throw new UserAlreadyExistsException("This email id is already taken try other");
        }
        return userNotExists;
    }

    @Override
    public User registerUserToApplication(User userDetails) throws UserAlreadyExistsException {
        User storeUserDetails =null;
        if (checkExistingUser(userDetails)) {
            storeUserDetails= userServiceRepository.save(userDetails);
        }
        return storeUserDetails;
    }
}
