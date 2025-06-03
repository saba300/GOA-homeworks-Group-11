// hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('authUser')) || null);

  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.username === username)) {
      return { error: 'User already exists' };
    }
    const newUser = { username, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    return { success: true };
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem('authUser', JSON.stringify(found));
      return { success: true };
    }
    return { error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return { user, register, login, logout };
};
