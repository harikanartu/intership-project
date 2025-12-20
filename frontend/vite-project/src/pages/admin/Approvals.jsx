import { useEffect, useState } from "react";
import "./admin.css";

const Approvals = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("pending_mentors")) || [
        { id: 1, name: "Rahul", email: "rahul@test.com" },
        { id: 2, name: "Sneha", email: "sneha@test.com" }
      ];

    setMentors(stored);
    localStorage.setItem("pending_mentors", JSON.stringify(stored));
  }, []);

  const approveMentor = (mentor) => {
    // Remove from pending
    const updatedPending = mentors.filter((m) => m.id !== mentor.id);
    setMentors(updatedPending);
    localStorage.setItem(
      "pending_mentors",
      JSON.stringify(updatedPending)
    );

    // Add to approved users
    const approved =
      JSON.parse(localStorage.getItem("approved_users")) || [];

    approved.push({
      id: mentor.id,
      name: mentor.name,
      email: mentor.email,
      role: "MENTOR"
    });

    localStorage.setItem(
      "approved_users",
      JSON.stringify(approved)
    );
  };

  const rejectMentor = (id) => {
    const updated = mentors.filter((m) => m.id !== id);
    setMentors(updated);
    localStorage.setItem(
      "pending_mentors",
      JSON.stringify(updated)
    );
  };

  return (
    <div>
      <h2>Mentor Approvals</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {mentors.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td className="status-pending">MENTOR</td>
              <td>
                <button
                  className="btn-approve"
                  onClick={() => approveMentor(m)}
                >
                  Approve
                </button>
                <button
                  className="btn-reject"
                  onClick={() => rejectMentor(m.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}

          {mentors.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No pending mentor approvals
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Approvals;