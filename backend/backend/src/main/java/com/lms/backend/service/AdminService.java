package com.lms.backend.service;

import com.lms.backend.entity.User;
import com.lms.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    private final UserRepository userRepository;

    public AdminService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 🔴 FETCH ALL PENDING USERS
    public List<User> getPendingApprovals() {
        return userRepository.findByApprovedFalse();
    }

    // 🔴 APPROVE USER
    public void approveUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setApproved(true);
        userRepository.save(user);
    }
}