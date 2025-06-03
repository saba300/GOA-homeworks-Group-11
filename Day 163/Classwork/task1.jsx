import React, { useState } from 'react';

const LightToggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <h3>Light is {isOn ? 'ON' : 'OFF'}</h3>
      <button onClick={() => setIsOn(!isOn)}>Toggle Light</button>
    </div>
  );
};

export default LightToggle;
