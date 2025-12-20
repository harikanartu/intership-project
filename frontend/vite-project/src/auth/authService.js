import api from "../api/axios";

export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  console.log("LOGIN RESPONSE:", response.data); // MUST SEE THIS

  // 🔴 IMPORTANT: adjust based on backend response
  return response.data.token; 
};