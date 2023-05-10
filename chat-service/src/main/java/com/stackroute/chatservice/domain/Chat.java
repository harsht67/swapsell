package com.stackroute.chatservice.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Chat {
    @MongoId
    private String chatId;
    private List<String> participants;
    private List<Message> messages;

    public static class Message {
        private String messageId;
        private String senderId;
        private String receiverId;
        private String content;
        private Date timestamp;
    }

}
