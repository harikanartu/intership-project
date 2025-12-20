export default function MentorStudents() {
  const students = [
    { name: "Akhil", course: "Java", progress: 80 },
    { name: "Ravi", course: "Spring Boot", progress: 100 },
    { name: "Sneha", course: "Java", progress: 60 }
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2>👥 Enrolled Students</h2>

      <table style={table}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Course</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.progress}%</td>
              <td>
                {s.progress === 100 ? "Completed ✅" : "In Progress"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px"
};