import React, { useState } from "react";
import { fetchBooksResults } from "../../actions";
import { connect } from "react-redux";

// import search Icon
import { BiSearch } from "react-icons/bi";

import "./SearchBar.scss";
import history from "../../history";

const SearchBar = (props) => {
  // Hook for Controlled Form
  const [term, setTerm] = useState("");
  // Making it Controlled
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  // on Submit Ajax Call with Redux Action
  const onSubmit = (event) => {
    event.preventDefault();
    // if term is empty string there should not be any ajax call
    if (term) props.fetchBooksResults(`${term}`);
    // After search we want to clear our input field
    setTerm("");
    // Go to another Page where Book Results will show
    history.push(`/screen/results`);
  };

  return (
    <div className="search__bar">
      <form className="search__bar__form" onSubmit={onSubmit}>
        <>
          <input
            className="search__bar__field"
            type="text"
            placeholder="Search Your Favorite Books!"
            value={term}
            onChange={onInputChange}
          />
          <button className="search__bar__button">
            <BiSearch className="search__bar__icon" />
          </button>
        </>
      </form>
    </div>
  );
};
// Getting booksResult Obj from our Redux state
const mapStateToProps = (state) => {
  return { booksResults: state.booksResults };
};
// Connecting Redux
export default connect(mapStateToProps, { fetchBooksResults })(SearchBar);
