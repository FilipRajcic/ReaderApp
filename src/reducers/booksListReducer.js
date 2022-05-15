import { SELECT_BOOK_LIST } from "../actions/types";

const booksListReducer = (state = "myBooks", action) => {
  switch (action.type) {
    case SELECT_BOOK_LIST: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default booksListReducer;
