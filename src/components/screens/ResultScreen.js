import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import { renderBooks } from "./ResultScreenLogic";

const ResultScreen = (props) => {
  if (props.booksResults) {
    // Calling renderBooks function from my ResultScreenLogic component
    return (
      <div>
        {renderBooks(props.booksResults, false)}
        {props.showModal.show ? <Modal /> : null}
      </div>
    );
  }

  return <div>Please Search Some Books!</div>;
};

const mapStateToProps = (state) => {
  return {
    booksResults: state.booksResults,
    showModal: state.showModal,
  };
};

export default connect(mapStateToProps)(ResultScreen);
