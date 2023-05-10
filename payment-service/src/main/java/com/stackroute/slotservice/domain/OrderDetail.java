package com.stackroute.slotservice.domain;

import lombok.*;
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
    private Integer orderId;
    private String userFullName;
    private String addressToDeliver;
    private String contactNumber;
    private String orderStatus;
    private double orderAmount;


}
