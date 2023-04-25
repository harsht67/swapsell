package domain;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;


@Document
public class User {
    @MongoId
    private Long id;
    private String firstName;
    private String lastName;
    private String name;
    private String phoneNumber;
    private String email;
    private String address;
    private String image;


}
