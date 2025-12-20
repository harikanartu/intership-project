package com.lms.backend.controller;

import com.lms.backend.entity.Course;
import com.lms.backend.service.CourseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping
    public Course create(@RequestBody Course course) {
        return courseService.createCourse(course);
    }

    @GetMapping
    public List<Course> list() {
        return courseService.getAllCourses();
    }

    @PutMapping("/{id}")
    public Course update(@PathVariable Long id,
            @RequestBody Course course) {
        return courseService.updateCourse(id, course);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return "Course deleted";
    }
}