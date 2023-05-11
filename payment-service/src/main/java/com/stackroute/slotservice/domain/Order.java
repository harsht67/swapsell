package com.stackroute.slotservice.domain;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Order {
    private Long orderId;
    private String userFullName;
    private String addressToDeliver;
    private int contactNumber;
    private int alternateContactNumber;
    private String orderStatus;
    private double orderAmount;
    private List<Product> productList;

}
