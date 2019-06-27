import React, { useState } from "react";

const Questions = props => {
  //const [question, setQuestion] = useState(" ");
  // const [title, setTitle] = useState(" ");

  //const [description, setDescription] = useState(" ");
  const [buttonStyle, setButtonStyle] = useState({
    position: "relative",
    top: 165,
    fontSize: 15
  });

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
  const buttonClicked = () => {
    // setButtonStyle({ display: "none" });
    props.handleClick();
  };

  return props.questions.map((val, id) => {
    let titleId = `question-${id}`,
      descriptionId = `description-${id}`;
    return (
      <div className="d-flex flex-row">
        <div key={id} className="d-flex flex-column question-field">
          <form>
            <input
              type="text"
              name="title"
              data-id={id}
              id={titleId}
              className="title"
              placeholder="Question"
              value={props.questions[id].title}
              onChange={props.changeHandler}
            />

            <textarea
              name="description"
              data-id={id}
              id={descriptionId}
              className="description"
              placeholder="Question Description(optional)"
              value={props.questions[id].description}
              onChange={props.changeHandler}
            />
          </form>

          <button style={buttonStyle} onClick={buttonClicked}>
            Add question2
          </button>
        </div>

        <div className="form-description">
          <h1>{props.questions[id].title}</h1>
          <p>{props.questions[id].description}</p>
        </div>
      </div>
    );
  });
};

export default Questions;
