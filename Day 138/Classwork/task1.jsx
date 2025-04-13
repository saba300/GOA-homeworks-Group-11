import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>meaning: {count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
