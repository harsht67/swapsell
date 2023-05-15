package com.stackroute.slotservice.repository;

import com.stackroute.slotservice.domain.OrderDetail;
import com.stackroute.slotservice.domain.User;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository  extends MongoRepository<User,String> {
    User findUserByEmailId(String emailId);
}
