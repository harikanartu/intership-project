import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { generateCaptcha } from "../utils/captcha";
import "../styles/auth.css";

const RegisterMentor = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    expertise: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState({});
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (Number(captchaInput) !== captcha.answer) {
      setError("Captcha incorrect");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    try {
      await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: "ROLE_MENTOR",
      });

      alert("Mentor registered successfully. Await admin approval.");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <h2>Mentor Registration</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="captcha">
            <label>Solve to see miracle: {captcha.question}</label>
            <input
              type="number"
              required
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
          </div>

          <button type="submit">Register as Mentor</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterMentor;