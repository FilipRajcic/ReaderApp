import {
  ADD_BOOK,
  REMOVE_BOOK,
  ADD_READ_BOOK,
  ADD_DESCRIPTION,
} from "../actions/types";

// function for putting my Books list to localStorage
const putInLocalStorege = (state) => {
  localStorage.setItem("BookList", JSON.stringify(state));
};

// getting my Books list from localStorage
const getLocalStorage = JSON.parse(localStorage.getItem("BookList"));

// if localStorage is empty than we want our state to be empty object
const initialState = getLocalStorage ? getLocalStorage : {};

// my Books List reducer
const myBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      let getBooks = [];
      if (state[action.payload.currentList] && state.length !== 0) {
        // if there is Books Lists and there is CurrentList currentList is added to getBooks Array
        getBooks = state[action.payload.currentList];
      }
      // if there is not getBooks is empty

      // updating my books List by adding book to my currentList
      const stateTmp = {
        ...state,
        [action.payload.currentList]: [...getBooks, action.payload.book],
      };
      // updating local storage
      putInLocalStorege(stateTmp);
      return stateTmp;
    }
    case REMOVE_BOOK: {
      // filtering out book from my current List
      const stateTmp = {
        ...state,
        [action.payload.currentList]: [
          ...state[action.payload.currentList].filter(
            (book) => book.key !== action.payload.book.key
          ),
        ],
      };
      // updating local storage
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

      // updating local storage
      putInLocalStorege(stateClone);
      return stateClone;
    }
    case ADD_DESCRIPTION: {
      // making Clone of Our State so i dont mutate original state
      let stateClone = JSON.parse(JSON.stringify(state));
      // getting our Book for setting description
      const book = stateClone[action.payload.currentList].find((book) => {
        return book.key === action.payload.book.key;
      });

      // Putting description (mutating StateClone)

      // if there is Description of book than add it to the array
      if (book["myDescriptions"]) {
        book["myDescriptions"] = [
          ...book["myDescriptions"],
          action.payload.description,
        ];
      } else {
        // if there is not just create a new one
        book["myDescriptions"] = [action.payload.description];
      }
      // updating local storage
      putInLocalStorege(stateClone);
      return stateClone;
    }

    default:
      return state;
  }
};

export default myBooksReducer;
