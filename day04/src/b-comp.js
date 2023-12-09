import { useState } from 'react';

export const BComp = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <h1>1 BComp {val}</h1>
      <button onClick={() => setVal(val + 1)}>+</button>
    </div>
  );
}