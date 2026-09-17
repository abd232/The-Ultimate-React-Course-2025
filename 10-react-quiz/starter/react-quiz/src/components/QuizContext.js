import { createContext, useReducer, useEffect, useContext } from "react";

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

const QuizContext = createContext();

export function QuizProvider({ children }) {
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

  return <QuizContext value={{ state, dispatch }}>{children}</QuizContext>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("The Context was used outside of the provider");
  return context;
}
