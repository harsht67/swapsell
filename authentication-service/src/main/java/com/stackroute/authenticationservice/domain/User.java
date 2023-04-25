package com.stackroute.authenticationservice.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class User {
    private String firstname;
    private String lastname;
    @Id
    private String email;
    private String password;
}
