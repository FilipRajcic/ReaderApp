import React, { useState } from "react";
import { connect } from "react-redux";
import { addDescription } from "../../actions";
import "./BookScreenDetail.scss";

const BookScreenDetailLogic = (props) => {
  // setting state for our description (making controlled form)
  const [description, setDescription] = useState("");
  //   Preventing no image showing with my custom made "noImage" Image
  const coverImg = props.selectedBook?.cover_i
    ? `https://covers.openlibrary.org/b/id/${props.selectedBook.cover_i}-M.jpg`
    : require("../../images/noImage.png");

  const onFormSubmit = (event) => {
    event.preventDefault();
    // checking if there is text in description (if there is not , there is no need to save description)
    if (description) {
      // if there is than add new description to old description list
      props.addDescription(props.selectedBook, props.currentList, description);
    }
    // when we submit our description we want to clear input field
    setDescription("");
  };

  const renderMyDescriptions = () => {
    // if there is descriptions
    if (props.selectedBook.myDescriptions) {
      // show it
      return props.selectedBook.myDescriptions.map((description, index) => {
        return (
          <p className="book__detail__description" key={index}>
            {description}
          </p>
        );
      });
    }
    // if there is not than return null
    return null;
  };
  const renderBook = () => {
    return (
      <div className="book__detail">
        <div className="book__detail__left">
          <img className="book__detail__image" src={coverImg} alt="Cover Img" />
        </div>

        <div className="book__detail__right">
          <h1 className="book__detail__header">{props.selectedBook.title}</h1>
          <p className="book__detail__paragraph">
            by {props.selectedBook.author_name}
          </p>
          {/* rendering all of mine previous descriptions */}
          <p className="book__detail__paragraph">My Descriptions:</p>
          {renderMyDescriptions()}
          <form className="book__detail__form" onSubmit={onFormSubmit}>
            <label className="book__detail__form__label">
              Add a description
            </label>
            <textarea
              className="book__detail__form__textarea"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
            <button className="book__detail__form__button">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  // rendering books or loading depending of selectedBok
  return props.selectedBook ? renderBook() : <div>Loading</div>;
};
const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook,
    currentList: state.currentList,
  };
};
export default connect(mapStateToProps, { addDescription })(
  BookScreenDetailLogic
);
