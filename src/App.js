import React, { useState, useCallback } from "react";
import "./App.css";
import Title from "./components/Title-description";
import Questions from "./components/Questions";

const App = props => {
  const [questionArray, setQuestionArray] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [newQuestion, setNewQuestion] = useState(0);

  const handleClick = useCallback(() => {
    setButtonClicked(true);
    // setShowButton(false);
    // setNewQuestion(newQuestion + 1);
    // console.log("no of questions", newQuestion);
    //let new_array = questionArray.concat(Math.floor(Math.random() * 100 + 1));
    setQuestionArray([...questionArray, <Questions />]);
    console.log("question array", questionArray);
    console.log("total questions", questionArray.length);
  });

  return (
    <div className="App">
      <Title />
      {showButton && (
        <button className="add-question" onClick={handleClick}>
          Add question1
        </button>
      )}

      {buttonClicked && questionArray}
    </div>
  );
};

export default App;
