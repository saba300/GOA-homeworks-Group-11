import React, { useEffect, useState } from 'react';

const Dashboard = ({ tasks }) => {
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });

  useEffect(() => {
    const completed = tasks.filter(t => t.completed).length;
    const pending = tasks.length - completed;
    setStats({ total: tasks.length, completed, pending });
  }, [tasks]);

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Dashboard</h3>
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Pending: {stats.pending}</p>
    </div>
  );
};

export default Dashboard;
