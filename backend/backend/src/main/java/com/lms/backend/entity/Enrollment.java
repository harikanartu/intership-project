package com.lms.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "enrollments")
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userEmail;
    private Long courseId;
    private LocalDateTime enrolledAt;

    public Enrollment() {
    }

    public Enrollment(String userEmail, Long courseId) {
        this.userEmail = userEmail;
        this.courseId = courseId;
        this.enrolledAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public Long getCourseId() {
        return courseId;
    }

    public LocalDateTime getEnrolledAt() {
        return enrolledAt;
    }
}