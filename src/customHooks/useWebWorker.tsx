import { useEffect, useRef, useState } from "react";

type TCallbackFn = {
  (value: number): void;
};
const workerHandler = (fn: TCallbackFn) => {
  onmessage = (event) => {
    console.log("workerHandler");
    postMessage(fn(event.data));
  };
};

const useWebWorker = (callbackFn: TCallbackFn) => {
  const [result, setResult] = useState("");
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    console.log("useEffect has been run.....");
    const worker = new Worker(
      URL.createObjectURL(new Blob([`(${workerHandler})(${callbackFn})`]))
    );

    workerRef.current = worker;
    worker.onmessage = (event) => {
      console.log("onmessage", event, event.data);
      setResult(event.data);
    };

    return () => worker.terminate();
  }, [callbackFn]);

  return {
    result,
    run: (value: number) => {
      console.log("run");
      workerRef.current?.postMessage(value);
    },
  };
};

export default useWebWorker;
