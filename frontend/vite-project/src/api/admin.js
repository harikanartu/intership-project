import api from "./axios";

// Get all courses
export const getAllCourses = () => {
  return api.get("/courses");
};

// Create course
export const createCourse = (course) => {
  return api.post("/courses", course);
};

// Update course
export const updateCourse = (id, course) => {
  return api.put('/courses/${id}', course);
};

// Delete course
export const deleteCourse = (id) => {
  return api.delete('/courses/${id}');
};