function QuestionsFooter({
  remainingSeconds,
  dispatch,
  disabled,
  finalQuestion,
}) {
  const remainingMinutes = Math.floor(remainingSeconds / 60);
  const remainingSecondsInMinute = remainingSeconds % 60;
  return (
    <footer>
      <p class="timer">
        {remainingMinutes}:
        {remainingSecondsInMinute.toString().padStart(2, "0")}
      </p>
      {finalQuestion && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "FINISH_QUIZ" })}
        >
          Finish
        </button>
      )}
      {!finalQuestion && (
        <button
          className="btn btn-ui"
          disabled={disabled}
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        >
          Next
        </button>
      )}
    </footer>
  );
}

export default QuestionsFooter;
