import React, { useEffect } from "react";
import "../css/Form.css";
import { useNavigate } from "react-router-dom";

function CreatePost({
  input,
  handleInput,
  handleInputSubmit,
  isPublished,
  isAuth,
}) {
  //redirect user
  let navigate = useNavigate();

  //redirect to blog page
  const viewBlog = () => {
    navigate("/blog");
  };

  //show success message
  const showMessage = () => {
    return (
      <div className="sucess__container">
        <p className="success__message">Post published</p>
        <button className="success__btn" onClick={() => viewBlog()}>
          View Post
        </button>
      </div>
    );
  };

  //Redirect user to login page if not authenticated

  useEffect(() => {
    if (isAuth) {
      navigate("/createpost");
    }
  }, []);

  return (
    <div className="form__container">
      {isPublished ? showMessage() : ""}
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
        <div className="date-category">
          <label htmlFor="datetime">
            Select Date:
            <input
              className="form__date"
              type="date"
              name="date"
              value={input.date}
              id="datetime"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="category">
            Category
            <input
              className="form__category"
              type="text"
              name="category"
              value={input.category}
              id="category"
              onChange={handleInput}
            />
          </label>
        </div>
        <button className="form__btn" onClick={handleInputSubmit}>
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
