import React, { useMemo, useState } from "react";
import Counter from "../components/Counter";
import useToggle from "../customHooks/useToggle";

// useMeme is for value
// useCallback is for function

const UseMemoHook = () => {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useToggle(false);

  const handleToggle = () => {
    console.log("handleToggle fn");
    setToggle(!toggle);
  };

  const getRandomValue = useMemo(() => {
    for (let i = 0; i < 2000000000; i++) {}
    return "slow function count value is " + count;
  }, [count]);

  return (
    <div>
      {getRandomValue}
      {
        <div>
          <button onClick={() => setCount((prevState) => prevState - 1)}>
            -
          </button>
          <span style={{ margin: "0 10px" }}>{count}</span>
          <button onClick={() => setCount((prevState) => prevState + 1)}>
            +
          </button>
        </div>
      }
      <Counter key={toggle ? 1 : 2} />
      {/* @ts-ignore */}
      <button onClick={handleToggle}>toggle value {toggle.toString()}</button>
    </div>
  );
};

export default UseMemoHook;
