import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api/axios";
import { generateCaptcha } from "../utils/captcha";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [captcha, setCaptcha] = useState({});
  const [captchaInput, setCaptchaInput] = useState("");

  const [error, setError] = useState("");

  // Generate captcha on load
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Captcha validation
    if (Number(captchaInput) !== captcha.answer) {
      setError("Captcha incorrect");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      // Decode JWT to get role
      const decoded = jwtDecode(token);
      const role = decoded.role;

      // Role-based redirect
      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else if (role === "ROLE_STUDENT") {
        navigate("/student");
      } else if (role === "ROLE_MENTOR") {
        navigate("/mentor");
      } else {
        navigate("/unauthorized");
      }

    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <h2>LMS Portal Login</h2>
        <p className="auth-subtitle">
          Login to access your dashboard
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="input-group">
            <span>📧</span>
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <span>🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Captcha */}
          <div className="captcha">
            <label>Solve to see miracle: {captcha.question}</label>
            <input
              type="number"
              required
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;