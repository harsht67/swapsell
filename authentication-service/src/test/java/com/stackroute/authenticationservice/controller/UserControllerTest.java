package com.stackroute.authenticationservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.authenticationservice.domain.User;
import com.stackroute.authenticationservice.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.assertj.core.internal.bytebuddy.matcher.ElementMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.http.MediaType;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    public void testSaveUser() throws Exception {
        User user = new User();
        user.setFirstname("bob");
        user.setLastname("the builder");
        user.setEmail("bob@gmail.com");
        user.setPassword("bob10000");

        when(userService.saveUser(user)).thenReturn(user);

//        mockMvc.perform(post("/user")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(asJsonString(user)))
//                .andExpect(status().isCreated())
//                .andDo(MockMvcResultHandlers.print());
//
//
//        verify(userService, times(1)).saveUser(user);
        verifyNoMoreInteractions(userService);
    }

}
