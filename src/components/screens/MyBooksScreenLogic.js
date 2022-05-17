import React from "react";
import { connect } from "react-redux";
import { renderBooks } from "./ResultScreenLogic";
import { selectBookList } from "../../actions";
import "./MyBooksScreen.scss";

const MyBooksScreenLogic = (props) => {
  // placeholder for storage names (if there is no book List its default set on "MyBooks")
  let localStorageNames = ["myBooks"];

  //   checking if there is books List in my local storage
  if (JSON.parse(localStorage.getItem("BookList"))) {
    //   if there is store it
    const myBooksLocalStorage = JSON.parse(localStorage.getItem("BookList"));
    // and get all of their names in localStorageNames Array
    localStorageNames = Object.getOwnPropertyNames(myBooksLocalStorage);
  }
  // rendering select options
  const renderSelectOptions = () => {
    //   displaying all Names of my books Lists from LocalStorage
    return localStorageNames.map((name) => (
      <option className="mybooks__form__option" value={name} key={name}>
        {name}
      </option>
    ));
  };

  const onSwitchFormSubmit = (event) => {
    event.preventDefault();
    // onSwithcForm we are changeing currentBookList that is shown (so we can match it with what is selected in the form)
    props.selectBookList(event.target.value);
  };
  // render Button for adding switch BookLists functionality
  const renderSwitchMyListForm = () => {
    return (
      <div>
        <form className="mybooks__form">
          <label className="mybooks__form__label">Select List to show</label>
          <select
            className="mybooks__form__select"
            value={props.currentList}
            onChange={onSwitchFormSubmit}
          >
            {renderSelectOptions()}
          </select>
          {/* <button>Switch to List</button> */}
        </form>
      </div>
    );
  };

  //   getting books from current book list
  let myBooks = [];
  if (props.myBooks[props.currentList]) {
    myBooks = props.myBooks[props.currentList];
  }

  const renderMyBooksList = () => {
    //   if there is my books in my list render it with method from resultScreenLogic
    if (myBooks?.length !== 0) {
      return <div>{renderBooks(myBooks, true)}</div>;
    }
    // else return default message if there is no books in my list
    return (
      <p className="mybooks__text">Please search and add your favorite books</p>
    );
  };

  return (
    <div className="mybooks">
      {/* rendering form for switching between all my Books List */}

      {renderSwitchMyListForm()}

      {/* rendering Selected Book List*/}
      {renderMyBooksList()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myBooks: state.myBooks,
    currentList: state.currentList,
  };
};

export default connect(mapStateToProps, { selectBookList })(MyBooksScreenLogic);
