const courses = [
  {
    id: 1,
    title: "Java Fundamentals",
   mentor: "Karthik",
    progress: 60,
    image: "https://img.freepik.com/free-vector/java-programming-concept-illustration_114360-1670.jpg"
  },
  {
    id: 2,
    title: "Spring Boot",
    mentor: "Karthik",
    progress: 30,
    image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
  },
  {
    id: 3,
    title: "Microservices",
    mentor: "Karthik",
    progress: 0,
    image: "https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-1966.jpg"
  },
  {
    id: 3,
    title: "Microservices",
    mentor: "Karthik",
    progress: 0,
    image: "https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-1956.jpg"
  },
  {
    id: 3,
    title: "Microservices",
    mentor: "Karthik",
    progress: 0,
    image: "https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-1996.jpg"
  }

];
const submitCourse = (e) => {
  e.preventDefault();

  const newCourse = {
    id: Date.now(),
    title,
    mentor: "You",
    progress: 0,
    image: imageUrl,
  };

  const existingCourses =
    JSON.parse(localStorage.getItem("mentorCourses")) || [];

  const updatedCourses = [...existingCourses, newCourse];

  localStorage.setItem("mentorCourses", JSON.stringify(updatedCourses));

  console.log("Saved mentorCourses:", updatedCourses); // DEBUG

  navigate("/mentor"); // IMPORTANT (not /mentor/dashboard)
};

export default courses;