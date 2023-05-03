package com.stackroute.userservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.service.UserServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.reactivestreams.Publisher;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static reactor.core.publisher.Mono.when;

@ExtendWith(MockitoExtension.class)
class UserServiceControllerTest {
    @Mock
    UserServiceImpl userService;
    @InjectMocks
    UserServiceController userServiceController;

    MockMvc mockMvc;
    User user;
    List<User> userList;

    @BeforeEach
    void setUp() {
//        userList=new ArrayList<>();
//        user=new User(1L,"user1","userLastName1","9874521365","user1@gmail.com","address1,city1","image.png");
//        user=new User(2L,"user2","userLastName2","9654138706","user1@gmail.com","address1,city1","image.png");
//        user=new User(3L,"user3","userLastName2","8569471230","user1@gmail.com","address1,city1","image.png");
//        user=new User(4L,"user4","userLastName3","9214530870","user1@gmail.com","address1,city1","image.png");
//        user=new User(5L,"user5","userLastName4","6457823145","user1@gmail.com","address1,city1","image.png");
//        userList.add(user);
//        mockMvc = MockMvcBuilders.standaloneSetup(userServiceController).build();
    }

    @AfterEach
    void tearDown() {
        user=null;
        userList=null;
    }
    private String jsontoString(Object ob)  {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String jsoncontent = mapper.writeValueAsString(ob);//this will call the toString() of Customer Class
            return jsoncontent;
        }
        catch (JsonProcessingException exception)
        {
            return exception.getMessage();
        }
    }

    @Test
    @DisplayName("Test for user registration")
    void registerUser() throws Exception {
//        when((Publisher<?>) userService.registerUserToApplication(any())).thenReturn(user);
//        mockMvc.perform(post("/registerUser")
//                .contentType(MediaType.APPLICATION_JSON)
//                        .content(jsontoString(user))
//        ).andExpect(status().isCreated())
//                .andDo(MockMvcResultHandlers.print());
    }
}