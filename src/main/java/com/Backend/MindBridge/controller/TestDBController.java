package com.Backend.MindBridge.controller;

import com.Backend.MindBridge.entity.Users;
import com.Backend.MindBridge.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TestDBController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<Users> getAllUsers() {
        List<Users> users = userRepository.findAll();

        if (users.isEmpty()) {
            System.out.println("유저가 존재하지 않습니다.");
        }

        return users;
    }
}
