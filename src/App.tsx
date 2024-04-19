import "./App.css";

import Counter from "./Components/Counter";
import ToogleButton from "./Components/ToogleButton";

function App() {
  return (
    <>
      <Counter initialValue={0} maxCount={20} minCount={0} step={1} />
      <Counter initialValue={5} maxCount={15} minCount={0} step={2} />
      <Counter initialValue={20} maxCount={30} minCount={10} step={3} />
      <ToogleButton />
    </>
  );
}

export default App;
