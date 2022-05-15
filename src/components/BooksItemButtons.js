import React from "react";
import { connect } from "react-redux";
import { addBook, removeBook, addReadBook } from "../actions";

// importing Check icons
import { BsPatchCheck, BsPatchCheckFill } from "react-icons/bs";

// commenting history bcs im not using it
// import history from "../history";

const BooksItemButtons = ({ book, showReadFunction, ...props }) => {
  const onButtonAddClick = (book) => {
    // onClick adding book to myBooks state
    props.addBook(book);
    // we can add book and than swap to MyBooksScreen but its annoying if u want to add multiple books from 1 search so im gonna disable that function
    // history.push(`/`);
  };
  // onClick removing book from myBooks state
  const onButtonRemoveClick = (book) => {
    props.removeBook(book.key);
    // same thing here but with remove function
    // history.push(`/`);
  };

  // checking if result books are in myBooks array so that we cannot add same book twice!
  const isBookInMyBooks = (resultBook) => {
    if (props.myBooks.length !== 0) {
      return props.myBooks.some((myBook) => myBook.key === resultBook.key);
    }
    return false;
  };
  // Checking if my book is read
  const isBookRead = (book) => {
    if (book?.isRead === true) {
      return true;
    }
    return false;
  };

  // adding Read Property into MyBook item (event)
  const onIsReadClick = () => {
    props.addReadBook(book.key);
  };

  const renderRemoveButton = (resultBook) => {
    return (
      <>
        <button
          onClick={() => onButtonRemoveClick(resultBook)}
          className="books__item__button books__item__button--remove"
        >
          Remove From My Books
        </button>
      </>
    );
  };

  const renderAddButton = (resultBook) => {
    return (
      <div>
        <button
          onClick={() => onButtonAddClick(resultBook)}
          className="books__item__button books__item__button--add"
        >
          Add To My Books
        </button>
      </div>
    );
  };

  const renderIsBookRead = () => {
    return (
      <>
        {isBookRead(book) ? (
          <div className="center">
            <BsPatchCheckFill className="icon icon--full" title="Read" />
          </div>
        ) : (
          <div className="center">
            <button
              onClick={onIsReadClick}
              className="books__item__button books__item__button--add"
            >
              Mark as Read
            </button>
            <BsPatchCheck className="icon icon--empty" title="Not Read" />
          </div>
        )}
      </>
    );
  };

  const renderShowReadFunction = (showReadFunction) => {
    //  showReadFunctions enables us to show Read Functionality only in MyBooks Screen
    return showReadFunction
      ? // Checking if my book is Read and what need to be shown from that
        renderIsBookRead()
      : null; // else Nothing to display
  };
  // rendering either button or message depending on myBooks array
  const renderAddOrRemoveButton = (resultBook) => {
    return isBookInMyBooks(resultBook) ? (
      // if this book is in My books, display button for removing it from my books array
      <div className="books__item__container">
        {renderRemoveButton(resultBook)}
        {/* and adding Read function */}
        {renderShowReadFunction(showReadFunction)}
      </div>
    ) : (
      // if this book is not in my books display button for adding it to my books array
      renderAddButton(resultBook)
    );
  };

  // Final JSX Return
  return renderAddOrRemoveButton(book);
};
const mapStateToProps = (state) => {
  return {
    myBooks: state.myBooks,
  };
};
export default connect(mapStateToProps, { addBook, removeBook, addReadBook })(
  BooksItemButtons
);
