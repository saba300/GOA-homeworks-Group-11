import React, { useState } from 'react';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h3>Menu is {isOpen ? 'OPEN' : 'CLOSED'}</h3>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
    </div>
  );
};

export default MenuToggle;
