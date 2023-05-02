package com.stackroute.userservice.domain;

import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Product {
    private String name;
    private String title;
    private String description;
    private byte image;
    private double price;
    private String category;
    private String condition;
    private int ageInDays;
    private boolean exchangeable;
    private Date dateOfAddPosted;

}
