import React, { useState } from "react";
import useUpdateEffect from "../customHooks/useUpdateEffect";

const UpdateEffect = () => {
  const [count, setCount] = useState(10);
  const handleIncrement = () => setCount((prevState) => prevState + 10);
  useUpdateEffect(() => alert("Value has been changed"), count);
  return (
    <div>
      <b>UpdateEffect</b>
      <div>{count}</div>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default UpdateEffect;
