const DifficultTask = (complicity = 10) => {
  let counter = 0;
  const timeStart = new Date();
  for (let i = 0; i < 1000000000 * complicity; i++) {
    counter++;
  }
  const timeEnd = new Date();
  // @ts-ignore
  const result = `${((timeEnd - timeStart) / 1000).toFixed(
    1
  )} second, counter is ${counter}`;
  console.log("done:", result);
};

export default DifficultTask;
