import { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    setLoggedIn(isAuthenticated);
  }, []);

  return (
    <div className="p-4">
      {loggedIn ? (
        <Dashboard logout={() => {
          localStorage.setItem("auth", "false");
          setLoggedIn(false);
        }} />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
