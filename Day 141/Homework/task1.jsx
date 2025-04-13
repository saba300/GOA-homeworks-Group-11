import { useEffect, useState } from 'react';

function WindowSizeMessage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setMessage(width > height ? 'The window is horizontal' : 'The window is vertical');
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize); 
  }, []);

  return <p style={{ fontWeight: 'bold' }}>{message}</p>;
}

//errors miwers