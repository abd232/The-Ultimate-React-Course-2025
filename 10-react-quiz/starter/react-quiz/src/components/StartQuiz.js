function StartQuiz({ dispatch, questionsLength }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionsLength} questions to test your React knowledge!</h3>
      <button className="btn" onClick={() => dispatch({ type: "START_QUIZ" })}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartQuiz;
