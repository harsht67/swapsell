package com.stackroute.chatservice.service;

import com.stackroute.chatservice.domain.Chat;
import com.stackroute.chatservice.domain.ChatDTO;
import com.stackroute.chatservice.execption.ChatNotFoundException;

import java.util.Optional;

public interface ChatService {
    Optional<Chat> getChat(String id1, String id2);
    Chat saveChat(ChatDTO chatDTO);
    Chat addMessage(ChatDTO chatDTO) throws ChatNotFoundException;
}
