import { useEffect, useState } from "react";
import "./admin.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const approved =
      JSON.parse(localStorage.getItem("approved_users")) || [
        { id: 100, name: "Amit", email: "amit@test.com", role: "MENTOR" },
        { id: 180, name: "Hari", email: "hari@test.com", role: "MENTOR" }
      ];

    setUsers(approved);
    localStorage.setItem("approved_users", JSON.stringify(approved));
  }, []);

  return (
    <div>
      <h2>Manage Users</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td className="status-approved">Approved</td>
            </tr>
          ))}

          {users.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;