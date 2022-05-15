import {
  FETCH_BOOKS,
  ADD_BOOK,
  REMOVE_BOOK,
  ADD_READ_BOOK,
  SELECT_BOOK_LIST,
  SHOW_MODAL,
  HIDE_MODAL,
} from "./types";

import books from "../api/books";
// Making books fetch action
export const fetchBooksResults = (term) => {
  return async (dispatch) => {
    const response = await books.get(`/search.json?q=${term}`);
    dispatch({ type: FETCH_BOOKS, payload: response.data.docs });
  };
};

// export const clearBooksResults = () => {
//   return { type: "CLEAR_BOOKS" };
// };
// Adding books to myBooks state
export const addBook = (book, currentList) => {
  return { type: ADD_BOOK, payload: { book, currentList } };
};
// Removing books from myBooks state
export const removeBook = (book, currentList) => {
  return { type: REMOVE_BOOK, payload: { book, currentList } };
};

export const addReadBook = (book, currentList) => {
  return {
    type: ADD_READ_BOOK,
    payload: { book: book, currentList: currentList },
  };
};

export const selectBookList = (bookListName) => {
  return { type: SELECT_BOOK_LIST, payload: bookListName };
};

export const showModal = (book) => {
  return { type: SHOW_MODAL, payload: book };
};
export const hideModal = () => {
  return { type: HIDE_MODAL };
};

// // Adding books to myBooks state
// export const addBook = (book) => {
//   return { type: ADD_BOOK, payload: book };
// };
// // Removing books from myBooks state
// export const removeBook = (bookKey) => {
//   return { type: REMOVE_BOOK, payload: bookKey };
// };

// export const addReadBook = (bookKey) => {
//   return { type: ADD_READ_BOOK, payload: bookKey };
// };

// export const selectBookList = (bookListName) => {
//   console.log("actions open");
//   return { type: SELECT_BOOK_LIST, payload: bookListName };
// };
