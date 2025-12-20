// React Router
import { Routes, Route, Navigate } from "react-router-dom";

/* ================= AUTH ================= */
import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";

/* ================= LANDING & REGISTRATION ================= */
import Landing from "../pages/Landing";
import RegisterStudent from "../pages/RegisterStudent";
import RegisterMentor from "../pages/RegisterMentor";

/* ================= ROUTE GUARD ================= */
import ProtectedRoute from "../components/ProtectedRoute";

/* ================= ADMIN ================= */
import AdminLayout from "../pages/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import Approvals from "../pages/admin/Approvals";
import Analytics from "../pages/admin/Analytics";

/* ================= STUDENT ================= */
import StudentDashboard from "../pages/student/StudentDashboard";
import CourseViewer from "../pages/student/CourseViewer";

/* ================= MENTOR ================= */
import MentorLayout from "../pages/mentor/MentorLayout";
import MentorDashboard from "../pages/mentor/MentorDashboard";
import CreateCourse from "../pages/mentor/CreateCourse";
import AddChapters from "../pages/mentor/AddChapters";
import AssignStudents from "../pages/mentor/AssignStudents";
import TrackProgress from "../pages/mentor/TrackProgress";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ================= */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/student" element={<RegisterStudent />} />
      <Route path="/register/mentor" element={<RegisterMentor />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* ================= ADMIN ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* Default Admin Page */}
        <Route index element={<AdminDashboard />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="approvals" element={<Approvals />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* ================= STUDENT ================= */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={["ROLE_STUDENT"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/course/:id"
        element={
          <ProtectedRoute allowedRoles={["ROLE_STUDENT"]}>
            <CourseViewer />
          </ProtectedRoute>
        }
      />

      {/* ================= MENTOR ================= */}
      <Route
        path="/mentor"
        element={
          <ProtectedRoute allowedRoles={["ROLE_MENTOR"]}>
            <MentorLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<MentorDashboard />} />
        <Route path="create-course" element={<CreateCourse />} />
        <Route path="add-chapters" element={<AddChapters />} />
        <Route path="assign-students" element={<AssignStudents />} />
        <Route path="progress" element={<TrackProgress />} />
      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;