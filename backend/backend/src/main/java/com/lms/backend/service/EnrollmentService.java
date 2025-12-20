package com.lms.backend.service;

import com.lms.backend.entity.Enrollment;
import com.lms.backend.repository.EnrollmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentService {

    private final EnrollmentRepository enrollmentRepository;

    public EnrollmentService(EnrollmentRepository enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }

    public Enrollment enroll(String userEmail, Long courseId) {
        return enrollmentRepository.save(new Enrollment(userEmail, courseId));
    }

    public List<Enrollment> byUser(String email) {
        return enrollmentRepository.findByUserEmail(email);
    }

    public List<Enrollment> byCourse(Long courseId) {
        return enrollmentRepository.findByCourseId(courseId);
    }
}