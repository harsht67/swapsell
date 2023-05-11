package com.stackroute.slotservice.service;

import com.stackroute.slotservice.domain.User;
import com.stackroute.slotservice.exception.UserAlreadyExistsException;

public interface UserService {
    User addUserToDataBase(User user) throws UserAlreadyExistsException;

}
