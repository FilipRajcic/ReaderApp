import React, { useState } from "react";
import ReactDOM from "react-dom";
import history from "../history";
import { selectBookList, addBook, hideModal } from "../actions";
import { connect } from "react-redux";

import { CgClose } from "react-icons/cg";
import "./Modal.scss";

const Modal = (props) => {
  // state for making new book List names
  // and for making controlled input field
  const [newBookListName, setNewBookListName] = useState("");

  // setting default localStorageNames to "myBooks" in case that there is no Book List in Local Storage
  let localStorageNames = ["myBooks"];
  if (JSON.parse(localStorage.getItem("BookList"))) {
    const myBooksLocalStorage = JSON.parse(localStorage.getItem("BookList"));
    // getting all names of books Lists
    // but we filter out current List
    const localStorageNamesTmp =
      Object.getOwnPropertyNames(myBooksLocalStorage);
    localStorageNames = localStorageNamesTmp.filter(
      (book) => book !== props.currentList
    );
  }

  // setting state for existing Book lists
  // making default first book list name from localStorageNames
  const [oldList, setOldList] = useState(localStorageNames.at(0));

  // rendering select options
  const renderSelectOptions = () => {
    // rendering all options except my currentList
    return localStorageNames.map((name) => {
      return (
        <option value={name} key={name}>
          {name}
        </option>
      );
    });
  };

  // making new List and adding book to it
  const onNewListFormSubmit = (e) => {
    e.preventDefault();
    // new List becomes current List
    props.selectBookList(newBookListName);

    // adding book to new list
    props.addBook(props.showModal.book, newBookListName);
    // hiding modal
    props.hideModal();
    // pushing user to my Books page where currentList is new list that we just added book
    history.push("/");
  };
  // adding book to existing book list
  const onOldListFormSubmit = (e) => {
    e.preventDefault();
    // selected list becomes currentList
    props.selectBookList(oldList);
    // adding book to existing list
    props.addBook(props.showModal.book, oldList);
    // hiding modal
    props.hideModal();
    // pushing user to my Books page where currentList is list that we just added book
    history.push("/");
  };

  const selectList = (e) => {
    // setting our state to selected option
    setOldList(e.target.value);
  };
  return ReactDOM.createPortal(
    <div
      className="modal__background"
      onClick={() => {
        // close modal if clicked ouside the modal box
        props.hideModal();
      }}
    >
      {/* stopping event propagation so if we click on modal it doesnt close because of event bubbling */}
      <div onClick={(e) => e.stopPropagation()} className="modal">
        {
          // if There is no local storage items or there is just currentList dont render form for existing lists
          localStorageNames.length !== 0 ? (
            <>
              <form className="modal__form" onSubmit={onOldListFormSubmit}>
                <label className="modal__form__label">
                  Add to Existing list
                </label>
                <select className="modal__form__select" onChange={selectList}>
                  {renderSelectOptions()}
                </select>
                <button className="modal__form__button">Add</button>
              </form>
              <p className="modal__paragraph">OR</p>
            </>
          ) : null
        }

        <form className="modal__form" onSubmit={onNewListFormSubmit}>
          <label className="modal__form__label">Create A new List</label>
          <input
            className="modal__form__input"
            type="text"
            value={newBookListName}
            onChange={(e) => {
              setNewBookListName(e.target.value);
            }}
          />
          <button className="modal__form__button">Add to new List</button>
        </form>
        {/* button for closing Modal */}
        <CgClose
          className="modal__close"
          onClick={() => {
            props.hideModal();
          }}
        />
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
    currentList: state.currentList,
  };
};

export default connect(mapStateToProps, {
  selectBookList,
  addBook,
  hideModal,
})(Modal);
