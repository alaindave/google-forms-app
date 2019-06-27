import React, { useState } from "react";

const Questions = props => {
  const [question, setQuestion] = useState(" ");
  const [description, setDescription] = useState(" ");

  //const handleChange = e => {
  //  const { name, value } = e.target;
  //if (name === "title") {
  //  setQuestion(value);
  // } else {
  //  setDescription(value);
  // }
  //};

  /** return (
    <React.Fragment>
      <form className="d-flex flex-column">
        <input
          onChange={handleChange}
          className="title"
          type="text"
          placeholder="Questionnnsss"
        />
        <textarea
          onChange={handleChange}
          className="textArea"
          placeholder="Enter description"
        />
      </form>

      <p>im component two</p>
      <p>component 2</p>
    </React.Fragment>

  **/

  return props.questions.map((val, idx) => {
    let questionId = `question-${idx}`,
      titleId = `title-${idx}`;
    return (
      <div key={idx} className="d-flex flex-column question-field">
        <input
          type="text"
          name={questionId}
          data-id={idx}
          id={questionId}
          className="title"
          value={props.questions[idx].description}
          placeholder="Question"
        />

        <input
          type="text"
          name={questionId}
          data-id={idx}
          id={questionId}
          className="textArea"
          value={props.questions[idx].description}
          placeholder="Question Description(optional)"
        />
      </div>
    );
  });
};

export default Questions;
