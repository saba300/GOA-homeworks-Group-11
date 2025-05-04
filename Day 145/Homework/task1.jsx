import React, { useEffect, useState, useRef } from 'react';

function CountdownTimer() {
  const [inputSeconds, setInputSeconds] = useState('');
  const [remainingTime, setRemainingTime] = useState(
    Number(localStorage.getItem('remainingTime')) || 0
  );
  const [isRunning, setIsRunning] = useState(
    JSON.parse(localStorage.getItem('isRunning')) || false
  );
  const [initialTime, setInitialTime] = useState(
    Number(localStorage.getItem('initialTime')) || 0
  );

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }




    return () => clearInterval(intervalRef.current);
  }, [isRunning]);




  useEffect(() => {
    localStorage.setItem('remainingTime', remainingTime);
    localStorage.setItem('isRunning', JSON.stringify(isRunning));
    localStorage.setItem('initialTime', initialTime);




    if (remainingTime <= 0 && isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  }, [remainingTime, isRunning, initialTime]);

  const handleStart = () => {
    const time = Number(inputSeconds);
    if (!isRunning && time > 0 && remainingTime === 0) {
      setRemainingTime(time);
      setInitialTime(time);
    }
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setRemainingTime(initialTime);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        placeholder="Enter time in seconds"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(e.target.value)}
        disabled={isRunning}
      />

      <div style={{ margin: '10px 0' }}>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <h3>
        {remainingTime > 0
          ? `Time Remaining: ${remainingTime} seconds`
          : isRunning
          ? "Time's up!"
          : remainingTime === 0 && initialTime > 0
          ? "Time's up!"
          : 'Enter time and start'}
      </h3>
    </div>
  );
}

export default CountdownTimer;
