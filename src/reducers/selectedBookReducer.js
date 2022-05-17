import { SELECT_BOOK } from "../actions/types";

// reducer for my selectBook action
const selectedBookReducer = (state = null, action) => {
  // state is null so there is no selected books
  switch (action.type) {
    case SELECT_BOOK:
      // updating state to selected book
      return action.payload;
    default:
      return state;
  }
};

export default selectedBookReducer;
