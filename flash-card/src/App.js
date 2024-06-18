import { useState } from "react";
import "./App.css";

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

export default function App() {
  return (
    <div className="flashcards">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
    // if (selectedId === e) setSelectedId(null);
    // else setSelectedId(e);
  }
  return (
    <>
      {questions.map((element) => (
        <div
          className={element.id === selectedId ? "selected" : ""}
          key={element.id}
          onClick={() => handleClick(element.id)}
        >
          <p>{element.id === selectedId ? element.answer : element.question}</p>
        </div>
      ))}
    </>
  );
}
