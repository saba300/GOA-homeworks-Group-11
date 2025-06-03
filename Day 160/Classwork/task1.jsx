import React from 'react';

const App = () => {
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Two buttons</h2>

      {}
      <button
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '10px'
        }}
      >
        Inline
      </button>

      {}
      <button style={buttonStyle}>
        Object
      </button>
    </div>
  );
};

export default App;
