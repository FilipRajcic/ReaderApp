import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./BooksItem.scss";
import BooksItemButtonsCopy from "./BooksItemButtonsCopy";

const BooksDetail = ({ book, showReadFunction }) => {
  //   Preventing no image showing with my custom made "noImage" Image
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : require("../images/noImage.png");

  return (
    <div className="books__item">
      <div className="books__item__left">
        <img
          className="books__item__image"
          src={coverImg}
          alt={book.title}
        ></img>
      </div>
      <div className="books__item__right">
        <h1 className="books__item__title">{book.title?.toUpperCase()}</h1>
        <p className="books__item__author">by {book.author_name?.at(0)}</p>
        <div className="books__item__link">
          <Link to={`/screen/result${book.key}`}>View Details</Link>
        </div>
        {/* render buttons to add or remove button depending on MyBooks array */}

        {/* passing current book and showReadFunction */}
        <BooksItemButtonsCopy book={book} showReadFunction={showReadFunction} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { myBooks: state.myBooks };
};
export default connect(mapStateToProps)(BooksDetail);
