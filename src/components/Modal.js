import React, { useState } from "react";
import ReactDOM from "react-dom";
import history from "../history";
import { selectBookList, addBook, hideModal } from "../actions";
import { connect } from "react-redux";

import "./Modal.scss";
import { renderSelectOptions } from "./helper";

const Modal = (props) => {
  const [newBookListName, setNewBookListName] = useState("");
  const [newList, setNewList] = useState("");

  const onNewListFormSubmit = (e) => {
    e.preventDefault();
    props.selectBookList(newBookListName);
    props.addBook(props.showModal.book, newBookListName);
    props.hideModal();
    history.push("/");
  };

  const onOldListFormSubmit = (e) => {
    e.preventDefault();
    props.selectBookList(newList);
    props.addBook(props.showModal.book, newList);
    props.hideModal();
    history.push("/");
  };

  const selectList = (e) => {
    setNewList(e.target.value);
  };
  return ReactDOM.createPortal(
    <div
      className="modal__background"
      onClick={() => {
        props.hideModal();
      }}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <form onSubmit={onOldListFormSubmit}>
          <label>Add to Existing list</label>
          <select value={props.currentList} onChange={selectList}>
            {renderSelectOptions()}
          </select>
          <button>Add</button>
        </form>
        <p>OR</p>
        <form onSubmit={onNewListFormSubmit}>
          <label>Create A new List</label>
          <input
            type="text"
            value={newBookListName}
            onChange={(e) => {
              setNewBookListName(e.target.value);
            }}
          />
          <button>Add to new List</button>
        </form>
        {/* <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div> */}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = (state) => {
  return { myBooks: state.myBooks, showModal: state.showModal };
};

export default connect(mapStateToProps, {
  selectBookList,
  addBook,
  hideModal,
})(Modal);
