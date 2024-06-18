import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  // console.log(date);
  date.setDate(date.getDate() + count);
  // console.log(date);

  function negativeCountHandeler() {
    setCount((c) => c - step);
  }

  function positiveCountHandeler() {
    setCount((c) => c + step);
  }

  function negativeStepHandeler() {
    if (step > 1) setStep((s) => s - 1);
  }

  function positiveStepHandeler() {
    setStep((s) => s + 1);
  }

  return (
    <>
      <div>
        <button onClick={negativeStepHandeler}>-</button>
        <span>Step : {step}</span>
        <button onClick={positiveStepHandeler}>+</button>
      </div>
      <div>
        <button onClick={negativeCountHandeler}>-</button>
        <span>Count : {count}</span>
        <button onClick={positiveCountHandeler}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

export default App;
