import React from "react";
import { connect } from "react-redux";
import { addBook, removeBook, addReadBook, showModal } from "../actions";

// importing Check icons
import { BsPatchCheck, BsPatchCheckFill } from "react-icons/bs";

// commenting history bcs im not using it
// import history from "../history";

const BooksItemButtons = ({ book, fromMyBooks, ...props }) => {
  // getting books from my current book list
  let myBooks = [];
  if (props.myBooks[props.currentList]) {
    myBooks = props.myBooks[props.currentList];
  }

  const onButtonAddClick = (book) => {
    // onClick adding book to my current book list
    props.addBook(book, props.currentList);
    // we can add book and than swap to MyBooksScreen but its annoying if u want to add multiple books from 1 search so im gonna disable that function
    // history.push(`/`);
  };
  // onClick removing book from current book list
  const onButtonRemoveClick = (book) => {
    props.removeBook(book, props.currentList);
    // same thing here but with remove function
    // history.push(`/`);
  };

  // showing modal that adds book to other list or creates new list where book is added
  const onButtonOtherAddClick = (resultBook) => {
    props.showModal(resultBook);
  };

  // checking if result books are in my current Books list so that we cannot add same book twice in same list!
  const isBookInMyBooks = (resultBook) => {
    if (myBooks.length !== 0) {
      return myBooks.some((myBook) => myBook.key === resultBook.key);
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
    props.addReadBook(book, props.currentList);
  };

  // rendering remove button that removes book from my current book list
  const renderRemoveButton = (resultBook) => {
    return (
      <>
        <button
          onClick={() => onButtonRemoveClick(resultBook)}
          className="books__item__button books__item__button--remove"
        >
          Remove From "{`${props.currentList}`}"
        </button>

        {/* rendering button for adding book to my other book lists  */}
        {renderAddToOtherListButton(resultBook)}
      </>
    );
  };
  // button for adding book from my current list to my other list
  const renderAddToOtherListButton = (resultBook) => {
    return (
      <>
        <button
          onClick={() => onButtonOtherAddClick(resultBook)}
          className="books__item__button books__item__button--add"
        >
          Add To Other List
        </button>
      </>
    );
  };

  // rendering add button
  const renderAddButton = (resultBook) => {
    return (
      <div>
        <button
          onClick={() => onButtonAddClick(resultBook)}
          className="books__item__button books__item__button--add"
        >
          Add To "{`${props.currentList}`}" List
        </button>
        {/* rendering button for adding book to rendering button for adding book to my other book lists */}
        {renderAddToOtherListButton(resultBook)}
      </div>
    );
  };

  // rendering button for making book read or rendering icon that shows that books is already read
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

  const renderShowReadFunction = (fromMyBooks) => {
    //  showReadFunctions enables us to show Read Functionality only in my books lists
    return fromMyBooks
      ? // Checking if my book is fromMyBooks List and what need to be shown from that
        // if it is show read button functionality
        renderIsBookRead()
      : null; // else Nothing to display
  };
  // rendering either button or message depending on myBooks array
  const renderAddOrRemoveButton = (resultBook) => {
    return isBookInMyBooks(resultBook) ? (
      // if this book is in My current books list, display button for removing it from current books list
      <div className="books__item__container">
        {renderRemoveButton(resultBook)}
        {/* and adding Read functionality */}
        {/* displaying if book is read if not, button for making it read */}
        {renderShowReadFunction(fromMyBooks)}
      </div>
    ) : (
      // if this book is not in my current books list display button for adding it to my current books list
      renderAddButton(resultBook)
    );
  };

  // Final JSX Return
  return renderAddOrRemoveButton(book);
};
const mapStateToProps = (state) => {
  return {
    myBooks: state.myBooks,
    currentList: state.currentList,
  };
};
export default connect(mapStateToProps, {
  addBook,
  removeBook,
  addReadBook,
  showModal,
})(BooksItemButtons);
