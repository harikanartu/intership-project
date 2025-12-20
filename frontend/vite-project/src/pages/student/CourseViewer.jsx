import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import StudentNavbar from "./StudentNavbar";
import "../admin/admin.css";

const CourseViewer = () => {
  const { courseId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);

  const initialChapters = [
    {
      id: 1,
      title: "Introduction",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://img.youtube.com/vi/grEKMHGYyns/hqdefault.jpg",
      completed: false,
    },
    {
      id: 2,
      title: "Core Concepts",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      thumbnail: "https://img.youtube.com/vi/8cm1x4bC610/hqdefault.jpg",
      completed: false,
    },
    {
      id: 3,
      title: "Advanced Topics",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://img.youtube.com/vi/6i3EGqOBRiU/hqdefault.jpg",
      completed: false,
    },
  ];

  const [chapters, setChapters] = useState(initialChapters);

  /* 🔄 RESTORE PROGRESS PER COURSE */
  useEffect(() => {
    const savedProgress = Number(
      localStorage.getItem(`course_${courseId}_progress`)
    );

    if (savedProgress > 0) {
      const completedCount = Math.round(
        (savedProgress / 100) * initialChapters.length
      );

      setChapters(
        initialChapters.map((c, i) => ({
          ...c,
          completed: i < completedCount,
        }))
      );
    }
  }, [courseId]);

  const canAccess = (index) =>
    index === 0 || chapters[index - 1].completed;

  /* ✅ SAVE PROGRESS PER COURSE */
  const handleVideoEnd = (index) => {
    setChapters((prev) => {
      const updated = prev.map((c, i) =>
        i === index ? { ...c, completed: true } : c
      );

      const completedCount = updated.filter((c) => c.completed).length;
      const progress = Math.round(
        (completedCount / updated.length) * 100
      );

      localStorage.setItem(
        `course_${courseId}_progress`,
        progress.toString()
      );

      if (progress === 100) {
        localStorage.setItem(
          `course_${courseId}_completed`,
          "true"
        );
      }

      return updated;
    });
  };

  /* 📄 CERTIFICATE */
  const downloadCertificate = () => {
    const doc = new jsPDF("landscape", "pt", "a4");

    doc.setFontSize(30);
    doc.text("Certificate of Completion", 420, 120, {
      align: "center",
    });

    doc.setFontSize(18);
    doc.text(
      "This certifies that the student has successfully completed the course",
      420,
      200,
      { align: "center" }
    );

    doc.setFontSize(22);
    doc.text(`Course ID: ${courseId}`, 420, 260, {
      align: "center",
    });

    doc.save(`Course_${courseId}_Certificate.pdf`);
  };

  const allCompleted = chapters.every((c) => c.completed);

  return (
    <>
      <StudentNavbar />

      <div className="course-viewer-wrapper">
        <h2>Course Content</h2>

        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            className={`chapter-row ${
              canAccess(index) ? "" : "locked"
            }`}
          >
            <div className="chapter-video">
              {activeVideo === chapter.id ? (
                <video
                  controls
                  onEnded={() => handleVideoEnd(index)}
                >
                  <source src={chapter.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={chapter.thumbnail}
                  alt="thumbnail"
                  onClick={() =>
                    canAccess(index) &&
                    setActiveVideo(chapter.id)
                  }
                />
              )}
            </div>

            <div className="chapter-info">
              <h3>{chapter.title}</h3>
              {chapter.completed ? (
                <span className="status-approved">Completed ✔</span>
              ) : (
                <span className="status-pending">
                  Watch video to unlock next chapter
                </span>
              )}
            </div>
          </div>
        ))}

        {allCompleted && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              className="btn-approve"
              onClick={downloadCertificate}
            >
              Download Certificate
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseViewer;