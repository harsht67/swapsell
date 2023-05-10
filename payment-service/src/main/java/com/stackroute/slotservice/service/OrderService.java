package com.stackroute.slotservice.service;

import com.stackroute.slotservice.domain.OrderInput;

public interface OrderService {

    public void placeOrder(OrderInput orderInput);
}
