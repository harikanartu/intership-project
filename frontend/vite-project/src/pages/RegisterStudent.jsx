import "../styles/auth.css";
import api from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterStudent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/api/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: "ROLE_STUDENT",
      });

      alert("Student registered successfully. Await admin approval.");
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please check details.");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Student Registration</h2>

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button type="submit">Register</button>
        </form>

        {error && <p className="auth-error">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterStudent;