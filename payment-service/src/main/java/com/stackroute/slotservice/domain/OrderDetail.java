package com.stackroute.slotservice.domain;

import lombok.*;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class OrderDetail {
    @MongoId
    private Long orderId;
    private String userFullName;
    private String addressToDeliver;
    private int contactNumber;
    private int alternateContactNumber;
    private String orderStatus;
    private double orderAmount;

}
