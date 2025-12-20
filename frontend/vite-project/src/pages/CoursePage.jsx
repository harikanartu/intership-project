import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CoursePage = () => {
  const { id } = useParams();

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
    </div>
  );
};

export default CoursePage;