/*3) შვილი კომპონენტიდან გადაეცით მშობელ კომპონენტს მონაცემი */

import React, { useState } from "react";


const NameInput = ({ sendNameToParent }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    sendNameToParent(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const ParentComponent = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Welcome{ name ? ", " + name : "!" }</h1>
      <NameInput sendNameToParent={setName} />
    </div>
  );
};

export default ParentComponent;
