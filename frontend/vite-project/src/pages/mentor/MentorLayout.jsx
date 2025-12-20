import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./mentor.css";

const MentorLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="mentor-layout">
      {/* SIDEBAR */}
      <aside className="mentor-sidebar">
        <h2>LMS Mentor</h2>

        <NavLink to="/mentor" end>
          Dashboard
        </NavLink>
        <NavLink to="/mentor/create-course">
          Create Course
        </NavLink>
        <NavLink to="/mentor/add-chapters">
          Add Chapters
        </NavLink>
        <NavLink to="/mentor/assign-students">
          Assign Students
        </NavLink>
        <NavLink to="/mentor/progress">
          Track Progress
        </NavLink>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="mentor-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MentorLayout;