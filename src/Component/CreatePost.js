import React from "react";
import "../css/Form.css";

function CreatePost({ input, handleInput, handleInputSubmit }) {
  return (
    <div className="form__container">
      <form>
        <div>
          <input
            type="text"
            placeholder="Title"
            className="form__title"
            autoFocus
            name="title"
            value={input.title}
            onChange={handleInput}
          />
        </div>
        <div>
          <textarea
            placeholder="Enter article here"
            className="form__content"
            autoFocus
            cols="10"
            name="content"
            value={input.content}
            onChange={handleInput}
          />
        </div>
        <button className="form__btn" onClick={handleInputSubmit}>
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
