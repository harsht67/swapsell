package com.stackroute.slotservice.repository;

import com.stackroute.slotservice.domain.OrderDetail;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository  extends MongoRepository<OrderDetail,Long> {
}
