import React from "react";

const App = () => {
  const isLoggedIn = true; 
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
};

export default App;
