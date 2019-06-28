import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title-description";
import Questions from "./components/Questions";

const App = props => {
  const [questionArray, setQuestionArray] = useState([]);
  const [showButton, setShowButton] = useState(true);

  const handleChange = e => {
    if (["title", "description"].includes(e.target.className)) {
      let newQuestions = [...questionArray];
      newQuestions[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      setQuestionArray(newQuestions);
    }
  };

  const addQuestion = () => {
    setQuestionArray([
      ...questionArray,
      { title: "", description: "", options: [] }
    ]);
    setShowButton(false);
  };

  const handleDelete = id => {
    let updatedArray = questionArray.filter(
      question => questionArray.indexOf(question) !== id
    );

    setQuestionArray(updatedArray);
  };

  const saveOptions = (options, id) => {
    let newQuestions = [...questionArray];
    newQuestions[id]["options"].push(options);
    setQuestionArray(newQuestions);
  };

  const optionDeleteHandler = (id, index) => {
    let newQuestions = [...questionArray];
    let newOptionArray = newQuestions[id]["options"].filter(
      option => newQuestions[id]["options"].indexOf(option) !== index
    );
    newQuestions[id]["options"] = newOptionArray;
    setQuestionArray(newQuestions);
  };

  return (
    <div className="App">
      <Title />
      {showButton && (
        <button className=" btn btn-info add-question" onClick={addQuestion}>
          Add question
        </button>
      )}

      <Questions
        questions={questionArray}
        handleClick={addQuestion}
        changeHandler={handleChange}
        onDelete={handleDelete}
        getOptions={saveOptions}
        sendOptionDelete={optionDeleteHandler}
      />
    </div>
  );
};

export default App;
