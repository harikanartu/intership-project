import api from "./axios";

export const getAllCourses = async () => {
  const response = await api.get("/api/courses");
  return response.data;
};