package com.stackroute.slotservice.service;


import com.stackroute.slotservice.domain.User;
import com.stackroute.slotservice.exception.UserAlreadyExistsException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Override
    public User addUserToDataBase(String emailId) throws UserAlreadyExistsException {

        return null;
    }
}
