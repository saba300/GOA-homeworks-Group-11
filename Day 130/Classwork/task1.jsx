/*1) შექმენით კომპონენტი რომელიც არგუმენტად მიიღებს სახელების სიას, 
და თვქენ ul თეგში უნდა დაარენდეროთ 
თითოეული მნიშვნელობისთი ერთი li თეგი ახსენით კომენტარებით რა არის პროპს*/
import React from "react";

const NameList = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li> 
      ))}
    </ul>
  );
};

export default NameList;
