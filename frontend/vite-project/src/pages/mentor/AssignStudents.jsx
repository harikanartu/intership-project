import { useState } from "react";
import "./mentor.css";

const AssignStudents = () => {
  const courses = ["Java Fundamentals", "Spring Boot"];
  const students = ["Harika", "Rahul", "Anjali"];

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);

  const toggleStudent = (name) => {
    setSelectedStudents((prev) =>
      prev.includes(name)
        ? prev.filter((s) => s !== name)
        : [...prev, name]
    );
  };

  const assignCourse = () => {
    if (!selectedCourse || selectedStudents.length === 0) {
      alert("Please select course and students");
      return;
    }

    alert(
      'Assigned "${selectedCourse}" to ${selectedStudents.join(", ")}'
    );

    // reset (mock)
    setSelectedCourse("");
    setSelectedStudents([]);
  };

  return (
    <div className="form-page">
      <h1 className="page-title">Assign Course to Students</h1>

      <div className="form-card">
        <label>Select Course</label>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">-- Select Course --</option>
          {courses.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <label>Select Students</label>
        <div className="checkbox-group">
          {students.map((s) => (
            <label key={s}>
              <input
                type="checkbox"
                checked={selectedStudents.includes(s)}
                onChange={() => toggleStudent(s)}
              />
              {s}
            </label>
          ))}
        </div>

        <button onClick={assignCourse}>
          Assign Course
        </button>
      </div>
    </div>
  );
};

export default AssignStudents;