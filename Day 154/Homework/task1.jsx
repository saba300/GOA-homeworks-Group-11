'1) ამ პროექტს დაამატეთ სტუდენტის შეცვლის ფუნქცია + ადმინს შეეძლოს თავისი მონაცემების შეცვლა'
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);
  const [editingStudentIndex, setEditingStudentIndex] = useState(null);
  const [editingAdmin, setEditingAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("students", JSON.stringify(students));
  }, [account, accounts, students]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAccounts(JSON.parse(localStorage.getItem("accounts")) || []);
    setAccount(JSON.parse(localStorage.getItem("account")) || null);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    if (accounts.some((acc) => acc.email === newAccount.email)) {
      alert("Account already exists. Please log in.");
      return;
    }

    setAccounts([...accounts, newAccount]);
    alert("Account created successfully!");
    e.target.reset();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const enteredAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const loggedInUser = accounts.find(
      (acc) =>
        acc.email === enteredAccount.email && acc.pass === enteredAccount.pass
    );

    if (!loggedInUser) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    setAccount(loggedInUser);
    alert("Logged in successfully!");
    e.target.reset();
  };

  const logout = () => {
    setAccount(null);
    alert("Logged out successfully!");
  };

  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: e.target.studentName.value,
      lastname: e.target.studentLastname.value,
      age: e.target.studentAge.value,
    };

    setStudents([...students, student]);
    e.target.reset();
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  const startEditStudent = (index) => {
    setEditingStudentIndex(index);
  };

  const saveEditStudent = (e, index) => {
    e.preventDefault();
    const updatedStudent = {
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      age: e.target.age.value,
    };
    const updated = [...students];
    updated[index] = updatedStudent;
    setStudents(updated);
    setEditingStudentIndex(null);
  };

  const updateAdmin = (e) => {
    e.preventDefault();
    const newEmail = e.target.email.value;
    const newPass = e.target.pass.value;

    const updatedAccounts = accounts.map((acc) =>
      acc.email === account.email && acc.pass === account.pass
        ? { email: newEmail, pass: newPass }
        : acc
    );

    setAccounts(updatedAccounts);
    setAccount({ email: newEmail, pass: newPass });
    setEditingAdmin(false);
    alert("Account updated successfully!");
  };

  return (
    <main>
      {account === null ? (
        <section>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>

          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Hello, {account.email}</h1>
          <button onClick={logout}>Log out</button>

          <div style={{ margin: "20px 0" }}>
            <h2>Update Admin Account</h2>
            {editingAdmin ? (
              <form onSubmit={updateAdmin}>
                <input type="email" name="email" defaultValue={account.email} required />
                <input type="password" name="pass" defaultValue={account.pass} required />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditingAdmin(false)}>Cancel</button>
              </form>
            ) : (
              <button onClick={() => setEditingAdmin(true)}>Edit Account</button>
            )}
          </div>

          <div>
            <form onSubmit={addStudent}>
              <input type="text" name="studentName" placeholder="Student name" required />
              <input type="text" name="studentLastname" placeholder="Student lastname" required />
              <input type="number" name="studentAge" placeholder="Student age" required />
              <button>Add Student</button>
            </form>
          </div>

          <table border="1" style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) =>
                editingStudentIndex === index ? (
                  <tr key={index}>
                    <td>
                      <input name="name" defaultValue={student.name} form={`editForm${index}`} />
                    </td>
                    <td>
                      <input name="lastname" defaultValue={student.lastname} form={`editForm${index}`} />
                    </td>
                    <td>
                      <input name="age" type="number" defaultValue={student.age} form={`editForm${index}`} />
                    </td>
                    <td>
                      <form id={`editForm${index}`} onSubmit={(e) => saveEditStudent(e, index)}>
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setEditingStudentIndex(null)}>
                          Cancel
                        </button>
                      </form>
                    </td>
                  </tr>
                ) : (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.lastname}</td>
                    <td>{student.age}</td>
                    <td>
                      <button onClick={() => startEditStudent(index)}>Edit</button>
                      <button onClick={() => deleteStudent(index)}>Delete</button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}
