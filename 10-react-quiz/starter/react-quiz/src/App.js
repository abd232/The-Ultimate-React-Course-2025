import { useReducer, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartQuiz from "./components/StartQuiz";
import Error from "./components/Error";
import Loader from "./components/Loader";
import Questions from "./components/Questions";
import QuizFinished from "./components/QuizFinished";

function reducer(state, action) {
  switch (action.type) {
    case "START_QUIZ":
      const remainingSeconds = state.questions.length * 30;
      return { ...state, quizStarted: true, remainingSeconds };
    case "SET_QUIZ_STARTED":
      return { ...state, quizStarted: true };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        remainingSeconds: action.payload.length * 30,
        isLoading: false,
      };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_ERROR":
      return { ...state, error: true, isLoading: false };
    case "SELECT_ANSWER":
      const currAnswer = action.payload;
      const correctAnswer =
        state.questions[state.currentQuestionIndex].correctOption;
      const score =
        currAnswer === correctAnswer
          ? state.score + state.questions[state.currentQuestionIndex].points
          : state.score;
      return { ...state, currAnswer, score };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        currAnswer: -1,
      };
    case "FINISH_QUIZ":
      return { ...state, quizFinished: true, quizStarted: false };
    case "TICK":
      return { ...state, remainingSeconds: state.remainingSeconds - 1 };
    case "RESTART_QUIZ":
      return {
        ...state,
        quizStarted: false,
        quizFinished: false,
        currentQuestionIndex: 0,
        score: 0,
        remainingSeconds: state.questions.length * 30,
        currAnswer: -1,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    quizStarted: false,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    remainingSeconds: 0,
    currAnswer: -1,
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    async function fetchQuestions() {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "SET_QUESTIONS", payload: data });
      } catch (error) {
        dispatch({ type: "SET_ERROR" });
      }
    }
    fetchQuestions();
  }, []);

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
