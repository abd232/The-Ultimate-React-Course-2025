function QuizFinished({ score, totalScore, dispatch }) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Congratulations! Quiz Finished!</h2>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginTop: "0.5rem",
        }}
      >
        Your final score is: {score} / {totalScore}{" "}
        {score / totalScore === 1
          ? "🎉"
          : score / totalScore >= 0.8
            ? "😎"
            : score / totalScore < 0.5
              ? "😢"
              : "🙂"}
      </p>
      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          borderTop: "2px solid #ccc",
          paddingTop: "1.5rem",
        }}
      >
        <button
          className="btn"
          style={{ display: "block", margin: "1rem auto" }}
          onClick={() => dispatch({ type: "RESTART_QUIZ" })}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizFinished;
