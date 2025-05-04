import React, { useState } from 'react';

function TextUpdater() {
  const [text, setText] = useState('text');

  const handleClick = () => {
    setText('(handleClick)');
  };

  const handleCorrect = () => {
    setText(prevText => {
      console.log('old text', prevText);
      return '(handleCorrect)';
    });
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>click</button>
      <button onClick={handleCorrect}>correct</button>
    </div>
  );
}
//პირველ შემთხვევასი
//პირდაპირ გადავცემთ ახალ მნიშვნელობას setText-ს
//აქ არ გვჭირდება წინა მდგომარეობა, რადგან უბრალოდ ვანიჭებთ ახალ სტრიქონს
//მეორე შემთხვევაში
//setText-ს გადავცემთ ფუნქციას, რომელიც იღებს წინა მნიშვნელობას

export default TextUpdater;
