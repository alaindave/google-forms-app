import React, { useState } from "react";
const Title = () => {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
  };
  return (
    <div className="d-flex flex-row">
      <div className="form">
        <form className="d-flex flex-column">
          <input
            onChange={handleTitle}
            className="title"
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={handleDescription}
            className="textArea"
            placeholder="Enter description"
          />
        </form>
      </div>

      <div className="form-description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Title;
