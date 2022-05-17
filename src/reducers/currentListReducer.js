import { SELECT_BOOK_LIST } from "../actions/types";

// reducer for my selectBookList action
const currentListReducer = (state = "myBooks", action) => {
  // state default to "myBooks" bcs that is my first list
  switch (action.type) {
    case SELECT_BOOK_LIST: {
      // change currentList into a passed list
      return action.payload;
    }
    default:
      return state;
  }
};

export default currentListReducer;
