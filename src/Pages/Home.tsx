import React, { useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState<string[]>([]);

  const printList = (): void => {
    console.log(list, "list elements");
  };

  useEffect(() => {
    printList();
  }, []);

  return (
    <div>
      Home!!!!
      <button onClick={() => setList([...list, "000000"])}>add</button>
    </div>
  );
};

export default Home;
