import React from "react";

const App = () => {
  const backgroundColor = "lightblue"; 
  const divStyle = {
    backgroundColor: backgroundColor,
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
  };

  return (
    <div style={divStyle}>
      <h1>Styled Div with Inline Styles</h1>
      <p>The background color is dynamically applied.</p>
    </div>
  );
};

export default App;