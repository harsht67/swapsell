package com.stackroute.productservice.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

//@NodeEntity
@Node("Product")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String title;
    private String description;
    private String  image;
    private Double price;
    private String category;
    private User seller;
    private String condition;
    private Integer ageInDays;

    @Relationship(type = "OWNS", direction = Relationship.Direction.INCOMING)
    private OwnsRelationship ownsRelationship;
}
