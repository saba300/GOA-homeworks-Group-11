import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('re-render');
  }); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
