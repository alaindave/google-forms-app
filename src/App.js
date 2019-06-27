import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title-description";
import Questions from "./components/Questions";

const App = props => {
  const [questionArray, setQuestionArray] = useState([
    { title: " ", description: " " }
  ]);
  // const [buttonClicked, setButtonClicked] = useState(false);
  const [showButton, setShowButton] = useState(true);
  // const [newQuestion, setNewQuestion] = useState(0);

  // const handleClick = useCallback(() => {
  // setButtonClicked(true);
  // setShowButton(false);
  // setNewQuestion(newQuestion + 1);
  // console.log("no of questions", newQuestion);
  //let new_array = questionArray.concat(Math.floor(Math.random() * 100 + 1));
  //setQuestionArray([...questionArray, <Questions />]);
  // console.log("question array", questionArray);
  //console.log("total questions", questionArray.length);
  //});

  const handleChange = e => {
    if (["title", "description"].includes(e.target.className)) {
      let newQuestions = [...questionArray];
      newQuestions[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      setQuestionArray(newQuestions);
      console.log("questions array", questionArray);
    }
  };

  const addQuestion = () => {
    setQuestionArray([...questionArray, { title: "", description: "" }]);
    setShowButton(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Title />
      {showButton && (
        <button className="add-question" onClick={addQuestion}>
          Add question1
        </button>
      )}
      <Questions
        questions={questionArray}
        handleClick={addQuestion}
        changeHandler={handleChange}
      />
    </div>
  );
};

export default App;
