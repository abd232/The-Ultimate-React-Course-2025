import { useEffect } from "react";
import QuestionsFooter from "./QuestionsFooter";

function Questions({
  questions,
  index,
  dispatch,
  currAnswer,
  score,
  remainingSeconds,
}) {
  const progressValue = (index / questions.length) * 100;
  const totalScore = questions.reduce((total, question) => {
    return total + question.points;
  }, 0);
  useEffect(
    function () {
      const interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);

      return () => clearInterval(interval);
    },
    [dispatch],
  );

  return (
    <div className="questions">
      <div>
        <h4>
          Question {index + 1} of {questions.length}
        </h4>
        <progress value={progressValue} max="100" />
        <p
          style={{
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginTop: "0.5rem",
          }}
        >
          Score: {score} / {totalScore}
        </p>
      </div>

      <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
        {questions[index].question}
      </h4>
      <div className="options">
        {questions[index].options.map((answer, i) => (
          <button
            key={i}
            className={`btn btn-option ${currAnswer === i ? "answer" : ""} ${
              currAnswer !== -1
                ? i === questions[index].correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "SELECT_ANSWER", payload: i })}
            disabled={currAnswer !== -1}
          >
            {answer}
          </button>
        ))}
      </div>
      <QuestionsFooter
        remainingSeconds={remainingSeconds}
        finalQuestion={index === questions.length - 1}
        dispatch={dispatch}
        disabled={currAnswer === -1}
      />
    </div>
  );
}

export default Questions;
