package com.stackroute.productservice.repository;

import com.stackroute.productservice.domain.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

@RepositoryRestResource(collectionResourceRel = "User", path = "User")
public interface UserRepository extends Neo4jRepository<User, Long> {
    @Query(value = "MATCH (a:User),(b:Product)\n" +
            "WHERE a.firstName = :#{#firstName} AND ID(b) = :#{#productId}\n" +
            "CREATE (a)-[r:OWNS]->(b)")
    @Transactional
    void createOwnsRelationship(@Param("firstName") String firstName, @Param("productId") Long productId);
}
