import useCounter, { CounterTypes } from "../../hooks/useCounter";

const Counter = ({ initialValue, maxCount, minCount, step }: CounterTypes) => {
  const { count, isEven, increment, decrement, reset } = useCounter(
    initialValue,
    maxCount,
    minCount,
    step
  );

  return (
    <>
      <h1>Hooks</h1>
      <p>Count: {count}</p>
      <p>Value is: {isEven ? "Even" : "Odd"}</p>
      <button onClick={() => increment(step)}>+</button>
      <button onClick={() => decrement(step)}>-</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};
export default Counter;
