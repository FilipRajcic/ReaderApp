import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";

// initial state
const initialState = {
  book: {},
  show: false,
};

// reducer for my modal actions
const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      // setting state show to true and showing modal
      return { book: action.payload, show: true };
    case HIDE_MODAL:
      // setting state show to false and hiding modal
      return { book: {}, show: false };
    default:
      return state;
  }
};

export default showModalReducer;
