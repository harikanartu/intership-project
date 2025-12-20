export const parseJwt = (token) => {
  try {
    if (!token) return null;

    const base64Payload = token.split(".")[1];
    if (!base64Payload) return null;

    const payload = atob(base64Payload);
    return JSON.parse(payload);
  } catch (e) {
    console.error("Invalid JWT token", e);
    return null;
  }
};