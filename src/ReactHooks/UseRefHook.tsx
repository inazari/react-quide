import React, { useCallback, useEffect, useRef, useState } from "react";
import Counter from "../components/Counter";

// useMeme is for value
// useCallback is for function

interface ChildComponentProps {
  setToggle: (prevValue: (prev: boolean) => boolean) => void;
  randomValue: () => string;
}

const ChildComponent = React.memo((props: ChildComponentProps) => {
  const { setToggle, randomValue } = props;
  console.log("child only run on count");
  return (
    <>
      {randomValue()}
      <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
    </>
  );
});

const UseCallbackHook = () => {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  const renderCountRef = useRef(0);
  const countRef = useRef();

  useEffect(() => {
    renderCountRef.current += 1;
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const getRandomValue = useCallback(() => {
    console.log("oppes.");
    for (let i = 0; i < 1000000000; i++) {}
    return "slow function count value is " + count;
  }, [count]);
  return (
    <div>
      <b>render component count: {renderCountRef.current}</b>
      <div>counter</div>
      {
        <div>
          <button onClick={() => setCount((prevState) => prevState - 1)}>
            -
          </button>
          {/* @ts-ignore */}
          <span style={{ margin: "0 10px" }} ref={countRef}>
            {count}
          </span>
          <button onClick={() => setCount((prevState) => prevState + 1)}>
            +
          </button>
        </div>
      }
      <span>component counter</span>
      <Counter />
      <p> {toggle.toString()}</p>
      <button onClick={handleToggle}>toggle button</button>
      <ChildComponent setToggle={setToggle} randomValue={getRandomValue} />
      <button
        onClick={() => {
          // @ts-ignore
          countRef.current.innerHTML = "10";
        }}
      >
        update count HTML dom to 10
      </button>
    </div>
  );
};

export default UseCallbackHook;
