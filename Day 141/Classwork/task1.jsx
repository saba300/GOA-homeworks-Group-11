import { useState, useEffect } from 'react';

function App() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      const data = [
        { id: 1, title: 'Introduction to React' },
        { id: 2, title: 'Using useEffect Hook' },
        { id: 3, title: 'Component Structure and Props' },
      ];

      await new Promise(resolve => setTimeout(resolve, 1000));
      setResources(data);
      setLoading(false);
    };

    fetchResources();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Learning Resources</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {resources.map(resource => (
            <li key={resource.id}>{resource.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
