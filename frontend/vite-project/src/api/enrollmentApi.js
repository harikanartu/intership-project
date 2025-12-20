import api from "./axios";

export const enrollCourse = async (courseId) => {
  await api.post("/api/enrollments", { courseId });
};