package com.stackroute.slotservice.service;


import com.stackroute.slotservice.domain.User;
import com.stackroute.slotservice.exception.UserAlreadyExistsException;
import com.stackroute.slotservice.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUserToDataBase(User user) throws UserAlreadyExistsException {
        Optional<User> userByEmailId = userRepository.findUserByEmailId(user.getEmailId());
        if (userByEmailId.isPresent()){
            throw new UserAlreadyExistsException("User is already present with email id "+user.getEmailId());
        }
        return userRepository.save(user);
    }
}
