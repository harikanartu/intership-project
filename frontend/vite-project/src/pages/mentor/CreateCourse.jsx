import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mentor.css";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const navigate = useNavigate();

  const handleCreateCourse = () => {
    if (!title || !description || !videoLink) {
      alert("Please fill all required fields");
      return;
    }

    const newCourse = {
      id: Date.now(),
      title,
      description,
      thumbnail:
        thumbnail ||
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      videoLink,
      chapters: []
    };

    const existingCourses =
      JSON.parse(localStorage.getItem("mentor_courses")) || [];

    localStorage.setItem(
      "mentor_courses",
      JSON.stringify([...existingCourses, newCourse])
    );

    navigate("/mentor/dashboard");
  };

  return (
    <div className="form-page">
      <h1 className="page-title">Create Course</h1>

      <div className="form-card">
        <label>Course Title *</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Java Fundamentals"
        />

        <label>Description *</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief course description"
        />

        <label>Thumbnail Image URL</label>
        <input
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          placeholder="https://example.com/image.jpg"
        />

        <label>Course Intro Video Link *</label>
        <input
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder="https://youtube.com/..."
        />

        <button onClick={handleCreateCourse}>
          Create Course
        </button>
      </div>
    </div>
  );
};

export default CreateCourse;