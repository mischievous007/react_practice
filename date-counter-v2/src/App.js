import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleStepChange(step) {
    // console.log(step.target);
    setStep(Number(step.target.value));
  }

  function negativeCountHandeler() {
    setCount((c) => c - step);
  }

  function positiveCountHandeler() {
    setCount((c) => c + step);
  }

  function handleCountChange(c) {
    setCount(Number(c.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div style={{ padding: 10 }}>
        <input
          type="range"
          max={10}
          min={1}
          value={step}
          onChange={handleStepChange}
        />
        <span>Steps: {step}</span>

        <div style={{ padding: 10 }}>
          <button onClick={negativeCountHandeler}>-</button>
          <span>
            <input type="text" value={count} onChange={handleCountChange} />
          </span>
          <button onClick={positiveCountHandeler}>+</button>
        </div>

        <div style={{ paddingTop: 10, paddingBottom: 5 }}>
          <p>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
          </p>
        </div>

        {count !== 0 ? (
          <div style={{ padding: 10 }}>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
