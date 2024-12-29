import { questions } from "./questions";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="container">
      {questions.map((question) => (
        <Card key={question.id} obj={question} />
      ))}
    </div>
  );
}

function Card({ obj }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div onClick={handleClick} className={isClicked ? "card--clicked" : "card"}>
      <h1 className="card__title">{isClicked ? obj.answer : obj.question}</h1>
    </div>
  );
}

export default App;
