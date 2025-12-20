import "./admin.css";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p className="subtitle">Platform-wide control & monitoring</p>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Total Users</h3>
          <p>120</p>
        </div>

        <div className="analytics-card">
          <h3>Total Courses</h3>
          <p>18</p>
        </div>

        <div className="analytics-card">
          <h3>Course Completions</h3>
          <p>340</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;