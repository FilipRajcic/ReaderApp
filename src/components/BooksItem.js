import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./BooksItem.scss";
import BooksItemButtons from "./BooksItemButtons";
import { selectBook } from "../actions";

const BooksDetail = ({ book, fromMyBooks, ...props }) => {
  //   Preventing no image showing with my custom made "noImage" Image
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : require("../images/noImage.png");

  // showing ViewDetailsButton
  const showViewDetailsButton = (fromMyBooks, book) => {
    // if book is in my Book List than i want to show ViewDetails Button
    return fromMyBooks ? (
      <Link
        className="books__item__link--link"
        onClick={() => {
          props.selectBook(book);
        }}
        to={`/screen/result${book.key}`}
      >
        View Details
      </Link>
    ) : (
      // else im not showing anything just a div to make space between components
      <div className="space"></div>
    );
  };

  const renderBooksItem = () => {
    return (
      <div className="books__item">
        <div className="books__item__left">
          {/* showing book cover */}
          <img
            className="books__item__image"
            src={coverImg}
            alt={book.title}
          ></img>
        </div>
        <div className="books__item__right">
          {/* book title */}
          <h1 className="books__item__title">{book.title?.toUpperCase()}</h1>
          {/* book author */}
          <p className="books__item__author">by {book.author_name?.at(0)}</p>
          <div className="books__item__link">
            {/* show ViewDetail button */}
            {showViewDetailsButton(fromMyBooks, book)}
          </div>

          {/* render buttons to add or remove depending on MyBooks array */}
          {/* passing current book and if its fromMyBooks */}
          <BooksItemButtons book={book} fromMyBooks={fromMyBooks} />
        </div>
      </div>
    );
  };

  return renderBooksItem();
};
const mapStateToProps = (state) => {
  return { myBooks: state.myBooks };
};
export default connect(mapStateToProps, { selectBook })(BooksDetail);
