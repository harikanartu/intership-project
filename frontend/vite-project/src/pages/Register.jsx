import { useState } from "react";
import { register } from "../api/auth";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "STUDENT",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert("Registered successfully");
      window.location.href = "/";
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <select
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="STUDENT">Student</option>
        <option value="MENTOR">Mentor</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;