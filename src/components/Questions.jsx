import React, { useState } from "react";

const Questions = props => {
  const [question, setQuestion] = useState(" ");
  const [description, setDescription] = useState(" ");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "title") {
      setQuestion(value);
    } else {
      setDescription(value);
    }
  };

  return (
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
  );
};

export default Questions;
