package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.repository.UserServiceRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    private UserServiceRepository userServiceRepository;
    @InjectMocks
    private UserServiceImpl userService;
    private User user1,user2;
    List<User> userList;
    @BeforeEach
    void setUp() {
        user1=new User(1L,"user1","userLastName","456987123","user1@gmail.com","address1,city,area-20013","img1.png");
        user2=new User(1L,"user2","userLastName","852146397","user2@gmail.com","address2,city,area-85210","img2.png");
        userList= Arrays.asList(user1,user2);
    }

    @AfterEach
    void tearDown() {
        user1=null;
        user2=null;
    }

    @Test
    @DisplayName("Test for registering user to application")
    void registerUserToApplication() throws UserAlreadyExistsException {
        when(userServiceRepository.findUserByEmail(user1.getEmail())).thenReturn(Optional.empty());
        when(userServiceRepository.save(any())).thenReturn(user1);
        assertEquals(user1,userService.registerUserToApplication(user1));
        verify(userServiceRepository,times(1)).save(any());
        verify(userServiceRepository,times(1)).findUserByEmail(any());
    }




}