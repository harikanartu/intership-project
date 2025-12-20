package com.lms.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/me")
    public String currentUser() {
        return "USER / MENTOR / ADMIN can access this";
    }
}