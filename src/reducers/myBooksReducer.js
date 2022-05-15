import { ADD_BOOK, REMOVE_BOOK, ADD_READ_BOOK } from "../actions/types";

// function for putting myBooks to localStorage
const putInLocalStorege = (state) => {
  localStorage.setItem("myBooks", JSON.stringify(state));
};

// getting myBooks from localStorage
const getLocalStorage = JSON.parse(localStorage.getItem("myBooks"));

// if localStorage is empty than we want our state to be empty array
const initialState = getLocalStorage ? getLocalStorage : [];

const myBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const stateTmp = [...state, action.payload];
      putInLocalStorege(stateTmp);
      return stateTmp;
    }
    case REMOVE_BOOK: {
      const stateTmp = [...state.filter((book) => book.key !== action.payload)];
      putInLocalStorege(stateTmp);
      return stateTmp;
    }
    case ADD_READ_BOOK: {
      // making Clone of Our State so i dont mutate original state
      let stateClone = JSON.parse(JSON.stringify(state));
      // getting our to be Read Book
      const readBook = stateClone.find((book) => {
        return book.key === action.payload;
      });

      // making it Read (mutating StateClone)
      readBook["isRead"] = true;

      putInLocalStorege(stateClone);
      return stateClone;
    }

    default:
      return state;
  }
};

export default myBooksReducer;
