package com.stackroute.chatservice.controller;

import com.stackroute.chatservice.domain.Chat;
import com.stackroute.chatservice.domain.ChatDTO;
import com.stackroute.chatservice.domain.ChatParticipants;
import com.stackroute.chatservice.domain.Message;
import com.stackroute.chatservice.execption.ChatNotFoundException;
import com.stackroute.chatservice.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/swapsell/api")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping("/chats")
    public ResponseEntity<ApiResponse<Chat>> fetchChat(@RequestParam("participantId") String participantId) {
        Optional<Chat> chatOptional = chatService.getChat(participantId);
        if (chatOptional.isPresent()) {
            ApiResponse<Chat> response = new ApiResponse<>(true, "Chat retrieved successfully", chatOptional.get());
            return ResponseEntity.ok(response);
        } else {
            ApiResponse<Chat> response = new ApiResponse<>(false, "No chat found", null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @PostMapping("/chats")
    public ResponseEntity<ApiResponse<Void>> addChat(@RequestBody ChatDTO chatDTO) {
        try {
            chatService.saveChat(chatDTO);
            ApiResponse<Void> response = new ApiResponse<>(true, "New chat created", null);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            ApiResponse<Void> response = new ApiResponse<>(false, "Error creating new chat", null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/chats/messages")
    public ResponseEntity<ApiResponse<Void>> addMessage(@RequestBody Message message) {
        try {
            chatService.addMessage(message);
            ApiResponse<Void> response = new ApiResponse<>(true, "Message added successfully", null);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (ChatNotFoundException e) {
            ApiResponse<Void> response = new ApiResponse<>(false, "No chat found", null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

}
