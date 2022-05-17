import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectBook } from "../../actions";
import BookScreenDetailLogic from "./BookScreenDetailLogic";

const BookScreenDetail = (props) => {
  // if we enter this page with only link (or Refresh) the selecedBook will be NULL so we need to get it every time we enter this link just in case, but we will update it every time we update the page bcs we want our new descriptions to be renederd
  useEffect(() => {
    const book = props.myBooks[props.currentList].find(
      (book) => book.key === `/works/${props.match.params.key}`
    );
    props.selectBook(book);
  });

  return <BookScreenDetailLogic />;
};
const mapStateToProps = (state) => {
  return {
    myBooks: state.myBooks,
    currentList: state.currentList,
  };
};
export default connect(mapStateToProps, { selectBook })(BookScreenDetail);
