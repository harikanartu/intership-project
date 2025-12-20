package com.lms.backend.repository;

import com.lms.backend.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {

    // find enrollments for a course
    List<Enrollment> findByCourseId(Long courseId);

    // find enrollments for a user
    List<Enrollment> findByUserEmail(String email);
}