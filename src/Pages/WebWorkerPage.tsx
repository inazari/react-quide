import React, { useEffect, useState } from "react";
import useWebWorker from "../customHooks/useWebWorker";

const WebWorkerPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [message, setMessage] = useState("");

  const { run, result } = useWebWorker((e: number) => {
    console.log("useWebWorker callback");

    return result;
  });
  const randomNumberHandler = () => {
    setRandomNumber(Math.round(Math.random() * 1000000));
  };

  const handlerInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    run(inputValue?.length || 1);
    setMessage("run...");
  };

  useEffect(() => {
    setMessage(result);
  }, [result]);

  return (
    <div>
      <div>
        <div>{randomNumber}</div>
        <button onClick={randomNumberHandler}>random number</button>
      </div>
      <br />
      <div>
        <label htmlFor="input">Run</label>
        <input
          value={inputValue}
          onChange={handlerInputValue}
          id="input"
          type="text"
        />
      </div>
      <br />
      <button onClick={handleOnClick}>run worker</button>
      <h3>{message}</h3>
    </div>
  );
};

export default WebWorkerPage;
