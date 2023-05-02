package com.stackroute.productservice.repository;

import com.stackroute.productservice.domain.Product;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "Product", path = "Product")
public interface ProductRepository extends Neo4jRepository<Product, Long> {
    @Query(value = "MATCH (a:User),(b:Product)\n" +
            "WHERE a.username = :#{#firstName} AND ID(b) = :#{#productId}\n" +
            "CREATE (a)-[r:OWNS]->(b)")
    @Transactional
    void createOwnsRelationship(@Param("firstName") String firstName, @Param("productId") Long productId);

    // search
    @Query(value = "MATCH (p:Product)\n" +
            "WHERE toLower(p.name) CONTAINS toLower($keyword)\n" +
            "RETURN p")
    List<Product> searchProduct(@Param("keyword") String keyword);
}