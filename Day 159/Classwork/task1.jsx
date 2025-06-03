// components/CalculatorContainer.jsx
import React, { useState } from 'react';
import Calculator from './Calculator';

const CalculatorContainer = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleChangeNum1 = (e) => setNum1(e.target.value);
  const handleChangeNum2 = (e) => setNum2(e.target.value);

  const handleCalculate = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <Calculator
      num1={num1}
      num2={num2}
      onChangeNum1={handleChangeNum1}
      onChangeNum2={handleChangeNum2}
      onCalculate={handleCalculate}
      result={result}
    />
  );
};

export default CalculatorContainer;
