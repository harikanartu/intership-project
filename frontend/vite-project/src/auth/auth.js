export const getUserFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
  
    try {
      return JSON.parse(atob(token));
    } catch {
      return null;
    }
  };