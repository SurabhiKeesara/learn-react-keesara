import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  //use states adds update calls to a queue (arrow functions)
  // executes them in queue order - batching updates

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
