import React from "react";
import { connect } from "react-redux";
import { addBook, removeBook, selectBookList } from "../../actions";
import Modal from "../Modal";
import { renderBooks } from "./ResultScreenLogic";
import { renderSelectOptions } from "../helper";

const MyBooksScreen = (props) => {
  let myBooks = [];
  if (props.myBooks[props.currentList]) {
    myBooks = props.myBooks[props.currentList];
  }

  const onSwitchFormSubmit = (event) => {
    event.preventDefault();
    props.selectBookList(event.target.value);
  };
  // render Button for adding switch BookLists functionality
  const renderSwitchMyList = () => {
    return (
      <div>
        <form>
          <label>Select List to show</label>
          <select value={props.currentList} onChange={onSwitchFormSubmit}>
            {renderSelectOptions()}
          </select>
          {/* <button>Switch to List</button> */}
        </form>
      </div>
    );
  };
  const renderMyBooksList = () => {
    if (myBooks?.length !== 0) return <div>{renderBooks(myBooks, true)}</div>;

    return <div>Please search and add your favorite books</div>;
  };

  const renderTry = () => {
    return (
      <div>
        <select>
          <option selected={false}>1</option>
          <option>2</option>
          <option selected={true}>3</option>
          <option>4</option>
        </select>
      </div>
    );
  };
  return (
    <div>
      {renderSwitchMyList()}
      {renderMyBooksList()}
      {/* {renderTry()} */}
      {props.showModal.show ? <Modal /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myBooks: state.myBooks,
    currentList: state.currentList,
    showModal: state.showModal,
  };
};

export default connect(mapStateToProps, {
  addBook,
  removeBook,
  selectBookList,
})(MyBooksScreen);
