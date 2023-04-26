package com.stackroute.userservice.configuration;

import lombok.*;

@Data
@NoArgsConstructor
@Getter
@Setter
public class UserDTO {
    private String id;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
