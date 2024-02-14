import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // rerendered after this first call
        // does it based on the initial value of 0
        // 0 -> 1 three times, not 0 -> 3
        // based on snapshot of first state
        setNumber(number + 3); 
        // setNumber(number + 1); 
        // setNumber(number + 1);
        // setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
