package com.stackroute.slotservice.service;

import com.stackroute.slotservice.domain.OrderDetail;
import com.stackroute.slotservice.domain.OrderInput;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    private static  final String ORDER_PLACED = "placed";
    @Override
    public void placeOrder(OrderInput orderInput) {
        // This method we have to process the order input
    }
}
