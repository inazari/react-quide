import React from "react";
import useToggle from "../customHooks/useToggle";

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <b>ToggleComponent</b>
      <div>{value.toString()}</div>
      <button onClick={() => toggleValue}>toggle value</button>
      <button onClick={() => toggleValue(false)}>set false</button>
      <button onClick={() => toggleValue(true)}>set true</button>
    </div>
  );
};

export default ToggleComponent;
