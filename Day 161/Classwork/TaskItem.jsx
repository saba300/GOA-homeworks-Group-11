import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ddd', margin: '8px 0', padding: '10px' }}>
      <h4>{task.title}</h4>
      <p>Due: {task.dueDate} | Priority: {task.priority}</p>
      <p>Status: {task.completed ? '✅ Completed' : '⌛ Pending'}</p>
      <button onClick={() => onToggle(task.id)}>Toggle Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
