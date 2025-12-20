import { useState } from "react";
import "./mentor.css";

const AddChapters = () => {
  const [chapter, setChapter] = useState({
    title: "",
    videoUrl: "",
    order: "",
  });

  const handleChange = (e) => {
    setChapter({ ...chapter, [e.target.name]: e.target.value });
  };

  const submitChapter = () => {
    alert("Chapter added successfully (mock)");
    setChapter({ title: "", videoUrl: "", order: "" });
  };

  return (
    <div className="form-page">
      <h1 className="page-title">Add Chapter</h1>

      <div className="form-card">
        <label>Select Course</label>
        <select>
          <option>Java Fundamentals</option>
          <option>Spring Boot</option>
        </select>

        <label>Chapter Title</label>
        <input
          name="title"
          value={chapter.title}
          onChange={handleChange}
        />

        <label>Video URL</label>
        <input
          name="videoUrl"
          value={chapter.videoUrl}
          onChange={handleChange}
          placeholder="YouTube / Video link"
        />

        <label>Chapter Order</label>
        <input
          name="order"
          value={chapter.order}
          onChange={handleChange}
          placeholder="1, 2, 3..."
        />

        <button onClick={submitChapter}>Add Chapter</button>
      </div>
    </div>
  );
};

export default AddChapters;