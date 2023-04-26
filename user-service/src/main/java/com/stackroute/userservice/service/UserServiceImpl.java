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
            if (userDetails.getEmail()!=null){
                userFromDb.setEmail(userDetails.getEmail());
            }
            if (userDetails.getAddress()!=null){
                userFromDb.setAddress(userDetails.getAddress());
            }
            if (userDetails.getImage()!=null){
                userFromDb.setImage(userDetails.getImage());
            }
            if (userDetails.getLastName()!=null){
                userFromDb.setLastName(userDetails.getLastName());
            }
            if (userDetails.getFirstName()!=null){
                userFromDb.setFirstName(userDetails.getFirstName());
            }
            if (userDetails.getPhoneNumber()!=0){
                userFromDb.setPhoneNumber(userDetails.getPhoneNumber());
            }
            return  userServiceRepository.save(userFromDb);
        }
        throw new UserNotFoundException("No user exist with email id "+ userDetails.getEmail());

    }
}
