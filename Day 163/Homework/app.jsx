import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const App = () => {
  const { user, register, login, logout } = useAuth();
  const [mode, setMode] = useState('login');

  const handleRegister = (u, p) => {
    const res = register(u, p);
    res.error ? alert(res.error) : alert('Registered! Now login.');
  };

  const handleLogin = (u, p) => {
    const res = login(u, p);
    if (res.error) alert(res.error);
  };

  if (!user) {
    return mode === 'login' ? (
      <>
        <Login onLogin={handleLogin} />
        <p>Don't have an account? <button onClick={() => setMode('register')}>Register</button></p>
      </>
    ) : (
      <>
        <Register onRegister={handleRegister} />
        <p>Already have an account? <button onClick={() => setMode('login')}>Login</button></p>
      </>
    );
  }

  return <Dashboard onLogout={logout} />;
};

export default App;
