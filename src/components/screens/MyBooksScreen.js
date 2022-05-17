import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import MyBooksScreenLogic from "./MyBooksScreenLogic";

const MyBooksScreen = (props) => {
  return (
    <div>
      {/* rendering BooksLogic */}
      <MyBooksScreenLogic />
      {/* showing Modal if we want to add Book to other List */}
      {props.showModal.show ? <Modal /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
  };
};

export default connect(mapStateToProps)(MyBooksScreen);
