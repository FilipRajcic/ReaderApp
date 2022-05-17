import { FETCH_BOOKS } from "../actions/types";

// reducer for my fetchBooksResults action
const booksResultsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      // putting all my books results in state
      return action.payload;
    default:
      return state;
  }
};

export default booksResultsReducer;
