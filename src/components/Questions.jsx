import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Questions = props => {
  const [optionValue, setOptionValue] = useState(" ");

  const buttonClicked = () => {
    props.handleClick();
  };

  const handleOptions = id => {
    //send option to parent component
    props.getOptions(optionValue, id);
  };

  const handleOptionsChange = (e, id) => {
    setOptionValue(e.target.value);
    props.sendOptionChange(e.target.value, id);
  };

  const handleOptionDelete = (id, index) => {
    //send index of deleted option to parent and id of question
    props.sendOptionDelete(id, index);
  };
  return props.questions.map((val, id) => {
    let titleId = `question-${id}`,
      descriptionId = `description-${id}`,
      optionsId = `options-${id}`;
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

            <input
              type="text"
              name="options"
              data-id={id}
              id={optionsId}
              className="options-input"
              placeholder="Add options"
              value={props.questions[id].optionsChange}
              onChange={e => handleOptionsChange(e, id)}
            />
          </form>

          <div className="options-list">
            {props.questions[id].options.map((option, index) => (
              <li key={index}>
                {option}
                <button
                  className="buttonTrash"
                  onClick={() => handleOptionDelete(id, index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </div>

          <button
            onClick={buttonClicked}
            className=" btn btn-info add-question2"
          >
            Add question
          </button>

          <button
            onClick={() => props.onDelete(id)}
            className=" btn btn-danger delete-question"
          >
            Delete
          </button>

          <button
            onClick={() => handleOptions(id)}
            className=" btn btn-success add-options"
          >
            Add options
          </button>
        </div>

        <div className="form-description">
          <h3 className="titleField">{props.questions[id].title}</h3>
          <p className="descriptionField">{props.questions[id].description}</p>
          <ul>
            {props.questions[id].options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
};

export default Questions;
