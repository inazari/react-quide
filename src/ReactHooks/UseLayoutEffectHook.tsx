import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectHook = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log("useLayoutEffect before component initialize");
  }, []);
  useEffect(() => {
    console.log("useEffect on load");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect before component initialize ---Count");
  }, [count]);
  useEffect(() => {
    console.log("useEffect on load ---Count");
  }, [count]);
  return (
    <div>
      UseLayoutEffect Hook
      <div>
        <button onClick={() => setCount((prevState) => prevState - 1)}>
          -
        </button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default UseLayoutEffectHook;
