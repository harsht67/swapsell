package com.stackroute.userservice.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Document
public class User {
    @MongoId
    private Long id;
    private String firstName;
    private String lastName;
    private int phoneNumber;
    private String email;
    private String address;
    private String city;
    private String state;
    private String pinCode;
    private byte image;
    private String password;
    private List<Product> productAddList;
}
