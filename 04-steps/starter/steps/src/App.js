import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const messages = [
    "Step 1: Learn React",
    "Step 2: Apply for a job.",
    "Step 3: Earn money.",
  ];
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <div className="App">
      <div className="steps">
        <div className="numbers">
          <div className="active">1</div>
          <div className={step > 1 ? "active" : ""}>2</div>
          <div className={step > 2 ? "active" : ""}>3</div>
        </div>
        <div className="message">{messages[step - 1]}</div>
        <div className="buttons">
          <StepButtons
            onClick={handlePrevious}
            textcolor={"white"}
            backgroundcolor={"blue"}
          >
            <span>⏮️</span>Previous
          </StepButtons>
          <StepButtons
            onClick={handleNext}
            textcolor={"white"}
            backgroundcolor={"blue"}
          >
            Next<span>⏭️</span>
          </StepButtons>
        </div>
      </div>
    </div>
  );
}

function StepButtons({ onClick, textcolor, backgroundcolor, children }) {
  return (
    <button
      onClick={onClick}
      style={{ color: textcolor, backgroundColor: backgroundcolor }}
    >
      {children}
    </button>
  );
}
