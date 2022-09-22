import React, { useState, useEffect } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("HEY---->", `You clicked ${count} times`)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Count;