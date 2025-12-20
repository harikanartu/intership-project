package com.lms.backend.controller;

import com.lms.backend.entity.Enrollment;
import com.lms.backend.service.EnrollmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    public EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }

    @PostMapping
    public Enrollment enroll(@RequestParam String userEmail,
            @RequestParam Long courseId) {
        return enrollmentService.enroll(userEmail, courseId);
    }

    @GetMapping("/user/{email}")
    public List<Enrollment> byUser(@PathVariable String email) {
        return enrollmentService.byUser(email);
    }

    @GetMapping("/course/{id}")
    public List<Enrollment> byCourse(@PathVariable Long id) {
        return enrollmentService.byCourse(id);
    }
}