package com.stackroute.slotservice.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.ArrayList;
import java.util.List;
@Data
@ToString
@EqualsAndHashCode
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @MongoId
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private List<Product> products = new ArrayList<>();
}
