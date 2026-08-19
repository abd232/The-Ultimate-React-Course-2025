import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <button onClick={() => setStep(Math.max(1, step - 1))}>-</button>
        <span>steps:{step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>count:{count}</span>
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
    </div>
  );
}

export default App;
