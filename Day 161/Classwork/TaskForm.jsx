import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return alert('Title and Date are required');
    const newTask = {
      id: Date.now(),
      title,
      dueDate,
      priority,
      completed: false,
    };
    onAdd(newTask);
    setTitle('');
    setDueDate('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Task</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
