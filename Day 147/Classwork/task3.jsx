import React, { useState } from 'react';

function DynamicList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems(prevItems => [...prevItems, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <h2>Dynamic List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
