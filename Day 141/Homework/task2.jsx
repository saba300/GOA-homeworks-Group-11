import { useEffect } from 'react';

function LoadingTimer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('loading...');
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0', color: '#555', fontWeight: '600' }}>
      Timer is running... (Check console)
    </div>
  );
}
