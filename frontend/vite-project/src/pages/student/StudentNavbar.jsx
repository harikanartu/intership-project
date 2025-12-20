import { useNavigate } from "react-router-dom";
import "../admin/admin.css";

const StudentNavbar = () => {
  const navigate = useNavigate();
  const studentName = localStorage.getItem("studentName");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="student-navbar">
      <div className="nav-left">
        <h3>LMS Portal</h3>
      </div>

      <div className="nav-right">
        <span className="student-name">
          👤 {studentName}
        </span>
        <button className="btn-reject" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default StudentNavbar;