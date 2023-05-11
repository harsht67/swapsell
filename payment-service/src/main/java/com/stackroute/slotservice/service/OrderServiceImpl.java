package com.stackroute.slotservice.service;


import com.stackroute.slotservice.domain.User;
import com.stackroute.slotservice.exception.UserAlreadyExistsException;
import com.stackroute.slotservice.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    private final UserRepository userRepository;

    public OrderServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUserToDataBase(String emailId) throws UserAlreadyExistsException {
        Optional<User> userByEmailId = userRepository.findUserByEmailId(emailId);
        User user;
        if (userByEmailId.isPresent()){
             user = userByEmailId.get();
            userRepository.save(user);
            return user;
        }
        throw new UserAlreadyExistsException("User already exists with email id "+emailId);
    }
}
