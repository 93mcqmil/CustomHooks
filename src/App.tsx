import { useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const { count, isEven, setCount, increment, add10, min10, decrement, reset } =
    useCounter(0, 10, 0);
  return (
    <>
      <div>
        <h1>Hooks</h1>
        <p>Count: {count}</p>
        <p>Value is: {isEven ? "Even" : "Odd"}</p>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => setCount(0)}>minValue</button>
        <button onClick={() => setCount(10)}>maxValue</button>
        <button onClick={() => add10()}>Add10</button>
        <button onClick={() => min10()}>min10</button>
      </div>
    </>
  );
}

export default App;
