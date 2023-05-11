package com.stackroute.chatservice.service;

import com.stackroute.chatservice.domain.Chat;
import com.stackroute.chatservice.domain.ChatDTO;
import com.stackroute.chatservice.domain.Message;
import com.stackroute.chatservice.execption.ChatNotFoundException;
import com.stackroute.chatservice.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public Optional<Chat> getChat(String id1, String id2) {
        return chatRepository.findByParticipants(id1, id2);
    }

    @Override
    public Chat saveChat(ChatDTO chatDTO) {
        List<String> participants = new ArrayList<>();
        participants.add(chatDTO.getParticipant1());
        participants.add(chatDTO.getParticipant2());

        Chat chat = new Chat();
        chat.setParticipants(participants);
        chat.setMessages(new ArrayList<>());

        chatRepository.save(chat);

        return chat;
    }

    @Override
    public Chat addMessage(ChatDTO chatDTO) throws ChatNotFoundException {

        String sender = chatDTO.getParticipant1();
        String receiver = chatDTO.getParticipant2();

        LocalDateTime currentDateTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = currentDateTime.format(formatter);

        Optional<Chat> chat = chatRepository.findByParticipants(sender, receiver);
        if(chat.isPresent()) {
            Chat chatFromDb = chat.get();
            List<Message> messages = chatFromDb.getMessages();

            Message newMessage = new Message();
            newMessage.setContent(chatDTO.getMessage());
            newMessage.setSenderId(sender);
            newMessage.setReceiverId(receiver);
            newMessage.setTimestamp(formattedDateTime);

            messages.add(newMessage);

            chatFromDb.setMessages(messages);

            return chatRepository.save(chatFromDb);
        }
        else {
            throw new ChatNotFoundException("Chat not found between the participants: " + sender + " and " + receiver);
        }
    }

}
