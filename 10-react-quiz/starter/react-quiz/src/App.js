import Header from "./components/Header";
import Main from "./components/Main";
import StartQuiz from "./components/StartQuiz";
import Error from "./components/Error";
import Loader from "./components/Loader";
import Questions from "./components/Questions";
import QuizFinished from "./components/QuizFinished";
import { useQuiz } from "./components/QuizContext";

function App() {
  const { state, dispatch } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {state.isLoading && <Loader />}
        {state.error && <Error />}
        {!state.quizStarted && !state.quizFinished && (
          <StartQuiz
            dispatch={dispatch}
            questionsLength={state.questions.length}
          />
        )}
        {state.quizStarted && (
          <Questions
            questions={state.questions}
            index={state.currentQuestionIndex}
            dispatch={dispatch}
            currAnswer={state.currAnswer}
            score={state.score}
            remainingSeconds={state.remainingSeconds}
          />
        )}
        {state.quizFinished && (
          <QuizFinished
            score={state.score}
            totalScore={state.questions.reduce((total, question) => {
              return total + question.points;
            }, 0)}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
