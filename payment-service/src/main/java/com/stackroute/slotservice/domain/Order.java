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
    // we will take all the order inputs form the user
    private String userFullName;
    private String userAddress;
    private String contactNumber;
    // taking list because we can add the list of items to the cart
    private List<Long> productId;
    private int alternateContactNumber;
}
