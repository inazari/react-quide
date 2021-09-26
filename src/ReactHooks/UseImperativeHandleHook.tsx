import React, { useRef } from "react";
import Counter, { ICounterProps } from "../components/Counter";

export interface MyInputHandles {
  focus(): void;
}

const UseImperativeHandleHook = () => {
  const counterRef = useRef<ICounterProps>(null);

  return (
    <div>
      <h4>UseImperativeHandle Hook</h4>
      <button onClick={() => counterRef.current?.handleSubtract()}>-</button>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current?.handleAdd()}>+</button>
    </div>
  );
};

export default UseImperativeHandleHook;
