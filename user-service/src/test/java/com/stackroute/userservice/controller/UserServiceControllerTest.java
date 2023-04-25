package com.stackroute.userservice.controller;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.service.UserServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
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
        userList=new ArrayList<>();
        user=new User(1L,"user1","userLastName1","9874521365","user1@gmail.com","address1,city1","image.png");
        user=new User(2L,"user2","userLastName2","9654138706","user1@gmail.com","address1,city1","image.png");
        user=new User(3L,"user3","userLastName2","8569471230","user1@gmail.com","address1,city1","image.png");
        user=new User(4L,"user4","userLastName3","9214530870","user1@gmail.com","address1,city1","image.png");
        user=new User(5L,"user5","userLastName4","6457823145","user1@gmail.com","address1,city1","image.png");
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void registerUser() {
    }
}