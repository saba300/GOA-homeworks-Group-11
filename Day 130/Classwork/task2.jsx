/*2) მშობელი კომპონენტიდან გადაეცით მონაცემი შვილ 
ომპონენტს მაგალითად თქვენი სახელი */

import React from "react";

const NameDisplay = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

const ParentComponent = () => {
  const myName = "Saba"; 
  return (
    <div>
      <h1>Welcome!</h1>
      <NameDisplay name={myName} />
    </div>
  );
};

export default ParentComponent;

