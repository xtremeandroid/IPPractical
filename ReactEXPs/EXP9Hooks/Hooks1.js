import React, { useState } from 'react';

function Hooks1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ayush Singh");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Name - {name}</p>
      <button onClick={() => setName("Shivam Singh")}>
        Click me
      </button>
    </div>
  );
}

export default Hooks1;