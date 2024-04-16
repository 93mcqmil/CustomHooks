import "./App.css";

import Counter from "./Components/Counter/Counter";

function App() {
  return (
    <>
      <Counter initialValue={0} maxCount={10} minCount={0} step={1} />
      <Counter initialValue={5} maxCount={15} minCount={0} step={2} />
      <Counter initialValue={20} maxCount={30} minCount={10} step={3} />
    </>
  );
}

export default App;
