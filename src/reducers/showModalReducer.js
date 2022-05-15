import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";
const initialState = {
  book: {},
  show: false,
};

const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { book: action.payload, show: true };
    case HIDE_MODAL:
      return { book: {}, show: false };
    default:
      return state;
  }
};

export default showModalReducer;
