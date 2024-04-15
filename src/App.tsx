import { useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const { count, setCount, increment, decrement, reset } = useCounter(0, 10, 0);
  return (
    <>
      <div>
        <h1>Hooks</h1>
        <p>Count: {count}</p>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => setCount(0)}>minValue</button>
        <button onClick={() => setCount(10)}>maxValue</button>
      </div>
    </>
  );
}

export default App;
