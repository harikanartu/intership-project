import { useNavigate } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import "../admin/admin.css";
import courses from "../../data/courses";
const StudentDashboard = () => {
  const navigate = useNavigate();

  const getProgress = (courseId) => {
    const saved = (localStorage.getItem('course_${courseId}_progress')) || 0;
    return saved ? Number(saved) : 0;
  };

  const isCompleted = (courseId) =>
    localStorage.getItem('course_${courseId}_completed') === "true";

  const courses = [
    {
      id: 1,
      title: "Java Fundamentals",
      mentor: "Suresh",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      id: 2,
      title: "Spring Boot",
      mentor: "Anjali",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      id: 3,
      title: "REST API Development",
      mentor: "Rahul",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      id: 4,
      title: "Database Fundamentals",
      mentor: "Meena",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    },
    {
      id: 5,
      title: "Microservices",
      mentor: "Karthik",
      image:
        "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2",
    },
    {
      id: 6,
      title: "System Design",
      mentor: "Pooja",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    },
  ];

  return (
    <>
      <StudentNavbar />

      <div className="student-dashboard-wrapper">
        <h3 className="section-title">Registered Courses</h3>

        <div className="student-course-grid">
          {courses.map((course) => {
            const progress = getProgress(course.id);
            const completed = isCompleted(course.id);

            return (
              <div className="student-course-card" key={course.id}>
                {/* ✅ IMAGE RESTORED */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />

                <div className="course-body">
                  <h4>{course.title}</h4>
                  <p className="mentor">Mentor: {course.mentor}</p>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: '${progress}%' }}
                    />
                  </div>

                  <p className="progress-text">
                    {progress}% completed
                  </p>

                  <button
                    className="btn-approve full-width"
                    onClick={() =>
                      navigate('/student/course/${course.id}')
                    }
                  >
                    {completed
                      ? "Download Certificate"
                      : "Continue Learning"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;