import { useState } from "react";

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const incrementConter = () => setCounter(counter + 1);

  return (
    <>
      <button onClick={incrementConter}>Increment</button>
      <text color="red">{counter}</text>
    </>
  );
}
