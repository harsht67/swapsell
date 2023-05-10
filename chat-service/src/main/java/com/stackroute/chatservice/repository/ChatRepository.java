package com.stackroute.chatservice.repository;

import com.stackroute.chatservice.domain.Chat;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatRepository extends MongoRepository<Chat, String> {
    Optional<Chat> findByParticipants(String id1, String id2);
}