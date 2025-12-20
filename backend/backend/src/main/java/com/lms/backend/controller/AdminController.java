package com.lms.backend.controller;

import com.lms.backend.entity.User;
import com.lms.backend.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    // 🔴 FIXED: Pending approvals
    @GetMapping("/pending-approvals")
    public List<User> getPendingApprovals() {
        return adminService.getPendingApprovals();
    }

    // 🔴 APPROVE USER
    @PutMapping("/approve/{id}")
    public ResponseEntity<String> approveUser(@PathVariable Long id) {
        adminService.approveUser(id);
        return ResponseEntity.ok("User approved");
    }
}