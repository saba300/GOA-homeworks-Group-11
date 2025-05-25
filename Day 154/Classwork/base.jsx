import { useState, useEffect } from "react";
import StudentForm from "./StudentForm";

const Dashboard = ({ logout }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(stored);
  }, []);

  const addStudent = (student) => {
    const updated = [...students, student];
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Student Management</h2>
      <button onClick={logout}>Logout</button>
      <StudentForm onAdd={addStudent} />
      <table border="1" cellPadding="5" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>
                <button onClick={() => deleteStudent(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
