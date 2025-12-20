package com.lms.backend.repository;

import com.lms.backend.entity.Role;
import com.lms.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    // 🔹 Users waiting for approval (students + mentors)
    List<User> findByApprovedFalseAndRoleNot(Role role);

    // 🔹 Approved users
    List<User> findByApprovedFalse();
}