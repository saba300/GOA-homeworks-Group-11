import { useState } from 'react';

function BackgroundColorToggle() {
  const colors = ['#f8d7da', '#d1ecf1', '#d4edda', '#fff3cd', '#cce5ff'];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div style={{ backgroundColor: colors[index], padding: '30px', transition: '0.3s ease' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px' }}>
        Change Background Color 💫
      </button>
    </div>
  );
}
