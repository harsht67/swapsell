package com.stackroute.slotservice.service;

import com.stackroute.slotservice.domain.User;
import com.stackroute.slotservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUserData(User user) {
        return userRepository.save(user);
    }
}
