import useCounter, { CounterTypes } from "../hooks/useCounter";

const Counter = ({ initialValue, maxCount, minCount, step }: CounterTypes) => {
  const { count, isEven, increment, decrement, reset, add10, minus10 } =
    useCounter(initialValue, maxCount, minCount, step);

  return (
    <>
      <h1 style={{ fontFamily: "serif" }}>Hooks</h1>
      <p>Count: {count}</p>
      <p>Value is: {isEven ? "Even" : "Odd"}</p>
      <button onClick={() => increment(step)}>+</button>
      <button onClick={() => decrement(step)}>-</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => add10()}>add10</button>
      <button onClick={() => minus10()}>minus10</button>
    </>
  );
};
export default Counter;
