export default function MentorCourses() {
  const courses = [
    { id: 1, name: "Java Fundamentals", students: 12 },
    { id: 2, name: "Spring Boot", students: 8 }
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2>📘 My Courses</h2>

      <table style={table}>
        <thead>
          <tr>
            <th>Course</th>
            <th>Students Enrolled</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.students}</td>
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