import React from 'react';
import useToggle from '../hooks/useToggle';

const LightToggle = () => {
  const [isOn, toggleIsOn] = useToggle(false);
  return (
    <div>
      <h3>Light is {isOn ? 'ON' : 'OFF'}</h3>
      <button onClick={toggleIsOn}>Toggle Light</button>
    </div>
  );
};

export default LightToggle;
