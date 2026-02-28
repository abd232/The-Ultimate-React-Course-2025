import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="main">
      <div>
        <label> {step} </label>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="number"
          name="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today "
          : count > 0
            ? `${count} days from today `
            : `${count} days ago `}
        is {new Date(Date.now() + count * 24 * 60 * 60 * 1000).toDateString()}
      </p>
      {(count !== 0 || step !== 1) && (
        <button onClick={handleReset}>reset</button>
      )}
    </div>
  );
}

export default App;
