import useCounter from "../../hooks/useCounter";

const Counter = ({initialValue:number,  }) {
  const { count, isEven, setCount, increment, decrement, reset } =
    useCounter(0, 10, 0);
  return (
    <>
      <div>
        <h1
          style={{
            fontFamily: "cursive",
            fontSize: "xx-large",
            color: "orange",
          }}
        >
          Hooks
        </h1>
        <p>Count: {count}</p>
        <p>Value is: {isEven ? "Even" : "Odd"}</p>
        <button onClick={() => increment(step)}>+</button>
        <button onClick={() => decrement(step)}>-</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => setCount(0)}>minValue</button>
        <button onClick={() => setCount(10)}>maxValue</button>
      
      </div>
    </>
  );
};
export default Counter;
