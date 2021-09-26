import React, { useState } from "react";
import useDebounce from "../customHooks/useDebounce";

const DebounceComponent = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert("done!"), 1000, count);
  const handleIncrement = () => setCount((prevState) => prevState + 1);
  return (
    <div>
      <b>DebounceComponent</b>
      <div>{count}</div>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default DebounceComponent;
