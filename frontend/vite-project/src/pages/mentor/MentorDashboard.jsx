import { useEffect, useState } from "react";
import courses from "../../data/courses";

const MentorDashboard = () => {
  const [mentorCourses, setMentorCourses] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("mentorCourses")) || [];
    setMentorCourses(stored);
  }, []);

  const allCourses = [...courses, ...mentorCourses];

  return (
    <div className="center-card">
      <h2>My Courses</h2>

      <div className="student-course-grid">
        {allCourses.length === 0 && <p>No courses yet</p>}

        {allCourses.map((course) => (
          <div key={course.id} className="student-course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />

            <div className="course-body">
              <h4>{course.title}</h4>
              <p className="mentor">Mentor: {course.mentor}</p>
              <p>Progress: {course.progress}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorDashboard;