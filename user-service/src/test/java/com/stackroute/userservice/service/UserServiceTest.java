package com.stackroute.userservice.service;

import com.stackroute.userservice.configuration.UserDTO;
import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.repository.UserServiceRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
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
    private UserDTO userDto;
    List<User> userList;
    @BeforeEach
    void setUp() {
//        user1=new User(1L,"user1","userLastName",456987123,"user1@gmail.com","address1,city,area-20013",(byte) 2222,"dccsdc",null);
//        user2=new User(1L,"user2","userLastName",852146397,"user2@gmail.com","address2,city,area-85210",(byte) 45.4,"user2",null);
//        userDto = new UserDTO();
//        userList= Arrays.asList(user1,user2);
    }

    @AfterEach
    void tearDown() {
        user1=null;
        user2=null;
        userList=null;
        userServiceRepository.deleteAll();
    }

    @Test
    @DisplayName("Test for registering user to application")
    void registerUserToApplication() throws UserAlreadyExistsException {
//        when(userServiceRepository.findUserByEmail(user1.getEmail())).thenReturn(Optional.empty());
//        when(userServiceRepository.save(any())).thenReturn(user1);
////        assertEquals(user1,userService.registerUserToApplication(user1));
//        verify(userServiceRepository,times(1)).save(any());
//        verify(userServiceRepository,times(1)).findUserByEmail(any());
    }

    @Test
    public void testUpdateUserDetails() throws UserNotFoundException {
        User user = new User();
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setEmail("johndoe@gmail.com");
        user.setAddress("123 Main St");
        user.setImage((byte) 12345);
        user.setPhoneNumber(1234567890);

        User updatedUser = new User();
        updatedUser.setEmail("johndoe@gmail.com");
        updatedUser.setAddress("456 Maple St");

        Mockito.when(userServiceRepository.findUserByEmail("johndoe@gmail.com")).thenReturn(Optional.of(user));
        Mockito.when(userServiceRepository.save(Mockito.any(User.class))).thenReturn(updatedUser);

        User result = userService.updateUserDetails(updatedUser);

        assertEquals("456 Maple St", result.getAddress());
    }




}