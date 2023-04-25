package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserService extends MongoRepository<User,Long> {
}
