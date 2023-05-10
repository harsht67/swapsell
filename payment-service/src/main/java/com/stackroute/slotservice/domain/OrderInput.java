package com.stackroute.slotservice.domain;

import java.util.List;

public class OrderInput {
    // we will take all the order inputs form the user
    private String userFullName;
    private String userAddress;
    private String contactNumber;
    // taking list because we can add the list of items to the cart
    private List<Long> productId;
}
