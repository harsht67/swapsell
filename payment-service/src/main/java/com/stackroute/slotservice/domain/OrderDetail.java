package com.stackroute.slotservice.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class OrderDetail {
    private Long orderId;
    private String userFullName;
    private String addressToDeliver;
    private int contactNumber;
    private int alternateContactNumber;
    private String orderStatus;
    private double orderAmount;
    private List<Product> productList;

}
