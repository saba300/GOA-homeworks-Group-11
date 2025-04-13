import { useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [threshold, setThreshold] = useState(75);

  const addStudent = () => {
    if (!name || !grade) return;

    const newStudent = {
      id: Date.now(),
      name,
      grade: parseFloat(grade),
    };

    setStudents([...students, newStudent]);
    setName('');
    setGrade('');
  };

  const averageGrade = () => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, s) => sum + s.grade, 0);
    return (total / students.length).toFixed(2);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h1>Student Grade Tracker</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Highlight Threshold: </label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(parseFloat(e.target.value))}
        />
      </div>

      {students.length > 0 && (
        <>
          <h3>Average Grade: {averageGrade()}</h3>
          <table border="1" cellPadding="8" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  style={{
                    backgroundColor:
                      student.grade >= threshold ? '#d4edda' : '#f8d7da',
                  }}
                >
                  <td>{student.name}</td>
                  <td>{student.grade}</td>
                  <td>
                    <button onClick={() => deleteStudent(student.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
