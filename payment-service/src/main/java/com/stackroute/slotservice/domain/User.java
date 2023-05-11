package com.stackroute.slotservice.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;
@Document
@Data
@ToString
@EqualsAndHashCode
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @MongoId
    private String emailId;
    private String firstName;
    private String lastName;
    private List<Order> orderList;
}
