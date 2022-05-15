import { FETCH_BOOKS } from "../actions/types";

const booksResultsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default booksResultsReducer;
