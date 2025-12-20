import api from "./axios";

export const enrollCourse = (courseId, studentEmail) => {
  return api.post('/enrollments/${courseId}', null, {
    params: { studentEmail }
  });
};

export const getMyEnrollments = (studentEmail) => {
  return api.get("/enrollments", {
    params: { studentEmail }
  });
};