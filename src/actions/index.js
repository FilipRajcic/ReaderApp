import {
  FETCH_BOOKS,
  ADD_BOOK,
  REMOVE_BOOK,
  ADD_READ_BOOK,
  SELECT_BOOK_LIST,
  SHOW_MODAL,
  HIDE_MODAL,
  SELECT_BOOK,
  ADD_DESCRIPTION,
} from "./types";
// importing all my types

import books from "../api/books";
// importing books for ajax calls

// Making books fetch action (with redux thunk)
export const fetchBooksResults = (term) => {
  return async (dispatch) => {
    // fetching books from openlibrary
    const response = await books.get(`/search.json?q=${term}`);

    // dispatching it and senging it to reducer
    dispatch({ type: FETCH_BOOKS, payload: response.data.docs });
  };
};

// Adding books to currentList books state
export const addBook = (book, currentList) => {
  return { type: ADD_BOOK, payload: { book, currentList } };
};
// Removing books from currentList state
export const removeBook = (book, currentList) => {
  return { type: REMOVE_BOOK, payload: { book, currentList } };
};

// making (adding) read book in currentList state
export const addReadBook = (book, currentList) => {
  return {
    type: ADD_READ_BOOK,
    payload: { book: book, currentList: currentList },
  };
};

// adding description to book that is in currentList
export const addDescription = (book, currentList, description) => {
  return {
    type: ADD_DESCRIPTION,
    payload: { book: book, currentList: currentList, description: description },
  };
};

// selecting currentList
export const selectBookList = (bookListName) => {
  return { type: SELECT_BOOK_LIST, payload: bookListName };
};

// setting showModal state to true so it can show
export const showModal = (book) => {
  return { type: SHOW_MODAL, payload: book };
};

// setting showModal to false
export const hideModal = () => {
  return { type: HIDE_MODAL };
};

// selecting book that need to be shown in BookScreenDetails
export const selectBook = (book) => {
  return { type: SELECT_BOOK, payload: book };
};
