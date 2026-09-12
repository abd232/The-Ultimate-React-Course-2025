import "./App.css";
import { useState } from "react";

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    setStep((s) => (s < messages.length - 1 ? s + 1 : s));
  }

  function handlePrevious() {
    setStep((s) => (s > 0 ? s - 1 : s));
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        ×
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, i) => (
              <div
                key={i}
                className={i <= step ? "active" : ""}
                onClick={() => setStep(i)}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="message">{messages[step]}</div>
          <div className="buttons">
            <button onClick={handlePrevious} disabled={step === 0}>
              ← Previous
            </button>
            <button
              onClick={handleNext}
              disabled={step === messages.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      )}
      ;
    </>
  );
}

export default App;
