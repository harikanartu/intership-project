import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import Navbar from "../components/Navbar";

const Certificate = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  return (
    <>
      <Navbar title="Certificate" />
      <div className="container">
        <div className="certificate">
          <h1>Certificate of Completion</h1>
          <p>This certifies that</p>
          <h2>Student Name</h2>
          <p>has successfully completed</p>
          <h3>{course.title}</h3>
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default Certificate;