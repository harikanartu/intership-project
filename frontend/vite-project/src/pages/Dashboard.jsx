import { parseJwt } from "../utils/jwt";
import AdminDashboard from "./AdminDashboard";
import MentorDashboard from "./MentorDashboard";
import StudentDashboard from "./StudentDashboard";

function Dashboard() {
  const token = localStorage.getItem("token");
  const user = parseJwt(token);

  if (user.role === "ADMIN") return <AdminDashboard />;
  if (user.role === "MENTOR") return <MentorDashboard />;
  return <StudentDashboard />;
}

export default Dashboard;