package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
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

    boolean checkExistingUser(User user){
        Optional<User> userByEmail = userServiceRepository.findUserByEmail(user.getEmail());
        return userByEmail.isPresent();
    }

    @Override
    public User registerUserToApplication(User userDetails) throws UserAlreadyExistsException {
        if (checkExistingUser(userDetails)){
            throw new UserAlreadyExistsException("This email id is already taken other");
        }
        return userServiceRepository.save(userDetails);
    }

    @Override
    public User updateUserDetails(User userDetails) throws UserNotFoundException{
        Optional<User> userByEmail = userServiceRepository.findUserByEmail(userDetails.getEmail());
        if (userByEmail.isPresent()){
            User userFromDb = userByEmail.get();
            userFromDb.setAddress(userDetails.getAddress());
            userFromDb.setEmail(userDetails.getEmail());
            userFromDb.setImage(userDetails.getImage());
            userFromDb.setLastName(userDetails.getLastName());
            userFromDb.setFirstName(userDetails.getFirstName());
            userFromDb.setPhoneNumber(userDetails.getPhoneNumber());
            return  userServiceRepository.save(userFromDb);
        }
        throw new UserNotFoundException("No user exist with email id "+ userDetails.getEmail());

    }
}
