import { ADD_BOOK, REMOVE_BOOK, ADD_READ_BOOK } from "../actions/types";

// function for putting myBooks to localStorage
const putInLocalStorege = (state) => {
  localStorage.setItem("BookList", JSON.stringify(state));
};

// getting myBooks from localStorage
const getLocalStorage = JSON.parse(localStorage.getItem("BookList"));

// if localStorage is empty than we want our state to be empty array
const initialState = getLocalStorage ? getLocalStorage : {};

const myBooksReducerCopy = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      let getBooks = [];
      if (state[action.payload.currentList] && state.length !== 0) {
        getBooks = state[action.payload.currentList];
      }
      const stateTmp = {
        ...state,
        [action.payload.currentList]: [...getBooks, action.payload.book],
      };
      putInLocalStorege(stateTmp);
      return stateTmp;
    }
    case REMOVE_BOOK: {
      const stateTmp = {
        ...state,
        [action.payload.currentList]: [
          ...state[action.payload.currentList].filter(
            (book) => book.key !== action.payload.book.key
          ),
        ],
      };
      putInLocalStorege(stateTmp);
      return stateTmp;
    }
    case ADD_READ_BOOK: {
      // making Clone of Our State so i dont mutate original state
      let stateClone = JSON.parse(JSON.stringify(state));
      // getting our to be Read Book
      const readBook = stateClone[action.payload.currentList].find((book) => {
        return book.key === action.payload.book.key;
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

export default myBooksReducerCopy;
