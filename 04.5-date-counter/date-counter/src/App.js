import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today `
              : `${Math.abs(count)} days ago `}{" "}
          {new Date(
            new Date().setDate(new Date().getDate() + count),
          ).toDateString()}
        </span>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button
            className="btn btn-danger"
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
