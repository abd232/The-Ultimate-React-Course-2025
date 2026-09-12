import "./App.css";
import React from "react";
import { userState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedQuestion, setSelectedQuestion] = React.useState(null);

  function handleQuestionClick(questionId) {
    setSelectedQuestion(questionId === selectedQuestion ? null : questionId);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          className={`flashcard ${selectedQuestion === question.id ? "selected" : ""}`}
          key={question.id}
          onClick={() => handleQuestionClick(question.id)}
        >
          <h2 hidden={selectedQuestion === question.id}>{question.question}</h2>
          <h2 hidden={selectedQuestion !== question.id}>{question.answer}</h2>
        </div>
      ))}
    </div>
  );
}
