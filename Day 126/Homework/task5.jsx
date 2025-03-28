import React from "react";

const App = () => {
  const renderMessage = () => {
    return <h2>Hello from the renderMessage function!</h2>;
  };

  return (
    <div>
      <h1>Welcome to React!</h1>
      {renderMessage()} {/*call the function here */}
    </div>
  );
};

export default App;
