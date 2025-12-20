import api from "./axios";

export const getAllCourses = () => {
  return api.get("/courses");
};

export const createCourse = (course) => {
  return api.post("/courses", course);
};

export const assignMentor = (courseId, mentorEmail) => {
  return api.put('/courses/${courseId}/mentor', null, {
    params: { mentorEmail }
  });
};