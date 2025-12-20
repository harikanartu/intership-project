import { Outlet, useNavigate } from "react-router-dom";
import "./admin.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-layout">
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>

        {/* 🔴 FIX: navigate to /admin (INDEX ROUTE) */}
        <button onClick={() => navigate("/admin")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/admin/manage-users")}>
          Manage Users
        </button>

        <button onClick={() => navigate("/admin/approvals")}>
          Mentor Approvals
        </button>

        <button onClick={() => navigate("/admin/analytics")}>
          Analytics
        </button>

        <button className="logout" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="content">
        {/* 🔴 CRITICAL: child routes render here */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;