import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const Questions = props => {
  const [optionValue, setOptionValue] = useState(" ");

  const addOptions = id => {
    //clear options input field
    setOptionValue(" ");

    //send option to parent component
    props.getOptions(optionValue, id);
  };

  const handleOptionsChange = e => {
    setOptionValue(e.target.value);
  };

  const handleOptionDelete = (id, index) => {
    //send index of deleted option and question id to parent
    props.sendOptionDelete(id, index);
  };

  return props.questions.map((value, id) => {
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
              value={optionValue}
              onChange={e => handleOptionsChange(e, id)}
            />
          </form>

          <div className="options-list">
            <ul>
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
            </ul>
          </div>

          <button
            onClick={() => props.onDelete(id)}
            className="  delete-question"
          >
            Delete Question
          </button>

          <button onClick={() => addOptions(id)} className="  add-options">
            Add option
          </button>
        </div>

        <div className="quizz-content">
          <h6 className="titleField">{props.questions[id].title}</h6>
          <p className="descriptionField">{props.questions[id].description}</p>
          <ul>
            {props.questions[id].options.map((option, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faSquare} />
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
};

export default Questions;
