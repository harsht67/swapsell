package com.stackroute.slotservice.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document
public class OrderDetail {
    @MongoId
    private Integer orderId;
    private String userFullName;
    private String addressToDeliver;
    private String contactNumber;
    private String orderStatus;
    private double orderAmount;
}
