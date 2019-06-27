import React, { useState } from "react";

const Title = () => {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

  return (
    <div className="d-flex flex-row">
      <div className="form">
        <form className="d-flex flex-column">
          <input
            name="title"
            onChange={handleChange}
            className="title"
            type="text"
            placeholder="Title"
          />
          <textarea
            name="description"
            onChange={handleChange}
            className="textArea"
            placeholder="Enter description"
          />
        </form>
      </div>

      <div className="form-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Title;
