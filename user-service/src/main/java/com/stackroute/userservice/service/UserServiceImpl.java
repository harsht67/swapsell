package com.stackroute.userservice.service;

import com.stackroute.userservice.configuration.MessageConfiguration;
import com.stackroute.userservice.configuration.UserDTO;
import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.repository.UserServiceRepository;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
public class UserServiceImpl implements UserService {

    private final UserServiceRepository userServiceRepository;
    private static final Random random = new Random();

    @Autowired
    public UserServiceImpl(UserServiceRepository userServiceRepository) {
        this.userServiceRepository = userServiceRepository;
    }

    boolean checkExistingUser(User user){
        Optional<User> userByEmail = userServiceRepository.findUserByEmail(user.getEmail());
        return userByEmail.isPresent();
    }
    public static long generateId() {
        long id = random.nextLong();
        if (id == Long.MIN_VALUE) {
            id = 0L; // To avoid negative value for id
        } else {
            id = Math.abs(id);
        }
        return id;
    }
    @RabbitListener(queues = MessageConfiguration.queueName1)
    public void userDataFromAuthService(UserDTO userDTO) throws UserAlreadyExistsException {
        System.out.println(userDTO);
        registerUserToApplication(userDTO);
    }
    @Override
    public User registerUserToApplication(UserDTO userDTO) throws UserAlreadyExistsException {
        User user = new User();
        user.setId(generateId());
        user.setEmail(userDTO.getEmail());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setPassword(userDTO.getPassword());
        System.out.println(user);
        if (checkExistingUser(user)){
            throw new UserAlreadyExistsException("This email id is already taken other");
        }
        return userServiceRepository.save(user);

    }

    @Override
    public User updateUserDetails(User userDetails) throws UserNotFoundException{
        Optional<User> userByEmail = userServiceRepository.findUserByEmail(userDetails.getEmail());
        if (userByEmail.isPresent()){
            User userFromDb = userByEmail.get();
            if (userDetails.getEmail()!=null){
                userFromDb.setEmail(userDetails.getEmail());
            }
            if (userDetails.getAddress()!=null){
                userFromDb.setAddress(userDetails.getAddress());
            }
            if (userDetails.getImage()!=0){
                userFromDb.setImage(userDetails.getImage());
            }
            if (userDetails.getLastName()!=null){
                userFromDb.setLastName(userDetails.getLastName());
            }
            if (userDetails.getFirstName()!=null){
                userFromDb.setFirstName(userDetails.getFirstName());
            }
            if (userDetails.getPhoneNumber()!=0){
                userFromDb.setPhoneNumber(userDetails.getPhoneNumber());
            }
            return  userServiceRepository.save(userFromDb);
        }
        throw new UserNotFoundException("No user exist with email id "+ userDetails.getEmail());

    }

    @Override
    public boolean deleteUser(String emailId) throws UserNotFoundException {
        Optional<User> userByEmail = userServiceRepository.findUserByEmail(emailId);
        if (userByEmail.isPresent()){
            userServiceRepository.findUserByEmail(emailId);
            return true;
        }
        throw new UserNotFoundException("User not found with "+emailId);
    }
}
