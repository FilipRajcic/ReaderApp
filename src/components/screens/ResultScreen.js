import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import { renderBooks } from "./ResultScreenLogic";
import "./MyBooksScreen.scss";

const ResultScreen = (props) => {
  if (props.booksResults) {
    return (
      <div className="mybook">
        {/* Calling renderBooks function from my ResultScreenLogic component */}
        {/* false in renderBooks decides if we are calling renderedBooks from MyBooksScreen (in this case this is false) */}
        {renderBooks(props.booksResults, false)}

        {/* Modal needs to be shown if we want to add book to Other list */}
        {props.showModal.show ? <Modal /> : null}
      </div>
    );
  }
  // if there is no booksResult we want our user to search some Books!
  return <div>Please Search Some Books!</div>;
};

// Getting our state objects
const mapStateToProps = (state) => {
  return {
    booksResults: state.booksResults,
    showModal: state.showModal,
  };
};

export default connect(mapStateToProps)(ResultScreen);
