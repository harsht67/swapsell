package com.stackroute.slotservice.domain;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Order {
    // we will take all the order inputs form the user
    private Long id;
    private String order;
    private double amount;
    private String currency;
    private String receipt;
    private String status;
    private int attempts;
    private Map<String,String> notes;
    private LocalDateTime localDateTime;
}
