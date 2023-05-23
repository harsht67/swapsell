package com.stackroute.productservice.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    private String name;
    private String title;
    private String description;
    private String  image;
    private Double price;
    private String category;
    private String condition;
    private Integer ageInDays;
    private String email;
    private String address;
    private String city;
    private String state;
    private Long pinCode;
    private String date;
}
