import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    const stored = JSON.parse(localStorage.getItem("admin"));
    if (stored && stored.username === username && stored.password === password) {
      localStorage.setItem("auth", "true");
      onLogin();
    } else {
      alert("invalid user");
    }
  };

  const handleRegister = () => {
    localStorage.setItem("admin", JSON.stringify({ username, password }));
    alert("succesful register");
  };

  return (
    <div className="space-y-4">
      <h2>log in or sign up</h2>
      <input
        type="text"
        placeholder="user"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={handleAuth}>log in</button>
        <button onClick={handleRegister}>sign up</button>
      </div>
    </div>
  );
};

export default Login;
