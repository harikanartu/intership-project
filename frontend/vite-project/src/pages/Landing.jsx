import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-bg">
      <div className="landing-overlay">
        <div className="landing-container">
          
          {/* LEFT */}
          <div className="landing-content">
            <h1>Internship Learning Management System</h1>
            <p>
              Industry-ready internships with mentor guidance, structured
              courses, progress tracking, and certification.
            </p>

            <ul>
              <li>✔ Mentor guided learning</li>
              <li>✔ Real-world projects</li>
              <li>✔ Role-based dashboards</li>
              <li>✔ Certificates</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="landing-actions">
            <h2>Get Started</h2>
            <button onClick={() => navigate("/register/student")}>
              Student Registration
            </button>
            <button onClick={() => navigate("/register/mentor")}>
              Mentor Registration
            </button>
            <button onClick={() => navigate("/login")}>
              Login
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Landing;