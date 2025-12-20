import courses from "../../data/courses";

const AdminDashboard = () => {
  return (
    <div className="center-card">
      <h2>All Courses in Platform</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Mentor</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.mentor}</td>
              <td>{c.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;