import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TipCalculator></TipCalculator>
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = bill * ((myTip + friendTip) / 2 / 100);

  function handelRest() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  }
  return (
    <div>
      <BillAmount bill={bill} onSetBill={setBill} />
      <TipPercentage percentage={myTip} onSelect={setMyTip}>
        How did you like the service?
      </TipPercentage>
      <TipPercentage percentage={friendTip} onSelect={setFriendTip}>
        How did your friend like the service?
      </TipPercentage>
      {bill > 0 && (
        <>
          <OutputText bill={bill} tip={tip} />
          <ResetButton onReset={handelRest} />
        </>
      )}
    </div>
  );
}

function BillAmount({ bill, onSetBill }) {
  return (
    <div className="element">
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        placeholder="Bill Amt."
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function TipPercentage({ percentage, onSelect, children }) {
  return (
    <div className="element">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function OutputText({ bill, tip }) {
  return (
    <h3 className="element">
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className="element">
      Reset
    </button>
  );
}
