import { useEffect, useState } from "react";
import "./mentor.css";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800";

const MentorDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedCourses =
      JSON.parse(localStorage.getItem("mentor_courses")) || [];
    setCourses(storedCourses);
  }, []);

  return (
    <div className="center-page">
      <h1 className="page-title">My Courses</h1>

      {courses.length === 0 ? (
        <p>No courses created yet</p>
      ) : (
        <div className="mentor-course-grid">
          {courses.map((course) => (
            <div key={course.id} className="mentor-course-card">
              {/* COURSE IMAGE WITH FALLBACK */}
              <img
                src={course.thumbnail || FALLBACK_IMAGE}
                alt={course.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_IMAGE;
                }}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />

              {/* COURSE DETAILS */}
              <h2>{course.title}</h2>
              <p style={{ marginBottom: "10px" }}>
                {course.description}
              </p>

              {/* VIDEO LINK */}
              {course.videoLink && (
                <a
                  href={course.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#1f4fd8",
                    fontWeight: "600",
                  }}
                >
                  ▶ Watch Course Intro
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentorDashboard;