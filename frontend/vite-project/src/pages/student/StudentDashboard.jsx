import courses from "../../data/courses";
import { useNavigate } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import "../admin/admin.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // 🔄 READ PROGRESS PER COURSE
  const progressData = {};
  courses.forEach((course) => {
    const savedProgress = Number(
      localStorage.getItem(`course_${course.id}_progress`)
    );
    progressData[course.id] = savedProgress || 0;
  });

  return (
    <>
      <StudentNavbar />

      <div className="student-dashboard-wrapper">
        <h2 className="section-title">My Courses</h2>

        <div className="student-course-grid">
          {courses.map((course) => {
            const progress = progressData[course.id];
            const isCompleted = progress === 100;

            return (
              <div key={course.id} className="student-course-card">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />

                <div className="course-body">
                  <h4>{course.title}</h4>
                  <p className="mentor">Mentor: {course.mentor}</p>

                  {/* Progress Bar */}
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <p className="progress-text">{progress}% completed</p>

                  {/* Action Button */}
                  {isCompleted ? (
                    <button
                      className="btn-approve full-width"
                      onClick={() =>
                        navigate(`/student/course/${course.id}`)
                      }
                    >
                      Download Certificate
                    </button>
                  ) : (
                    <button
                      className="btn-primary full-width"
                      onClick={() =>
                        navigate(`/student/course/${course.id}`)
                      }
                    >
                      Continue Learning
                    </button>
                  )}
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