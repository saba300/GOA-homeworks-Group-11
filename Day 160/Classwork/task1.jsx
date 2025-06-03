import React from 'react';

const App = () => {
  // Style object ღილაკისთვის
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
      <h2>ორი ღილაკი – სხვადასხვა სტილით</h2>

      {/* Inline სტილი პირდაპირ ელემენტში */}
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
        Inline ღილაკი
      </button>

      {/* Style Object-ით */}
      <button style={buttonStyle}>
        Object სტილის ღილაკი
      </button>
    </div>
  );
};

export default App;
