import { combineReducers } from "redux";
import booksResultsReducer from "./booksResultsReducer";
import myBooksReducer from "./myBooksReducer";
import booksListReducer from "./booksListReducer";
import myBooksReducerCopy from "./myBooksReducerCopy";

export default combineReducers({
  booksResults: booksResultsReducer,
  myBooks: myBooksReducerCopy,
  currentList: booksListReducer,
});
