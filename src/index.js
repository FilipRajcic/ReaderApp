import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./components/App";
import booksResultsReducer from "./reducers/booksResultsReducer";
import myBooksReducer from "./reducers/myBooksReducer";
import currentListReducer from "./reducers/currentListReducer";
import showModalReducer from "./reducers/showModalReducer";
import selectedBookReducer from "./reducers/selectedBookReducer";
// setting my container to html div tag with #root className
const container = document.querySelector("#root");
const root = createRoot(container);
// creating store and setting up my reducers
const store = configureStore({
  reducer: {
    booksResults: booksResultsReducer,
    myBooks: myBooksReducer,
    currentList: currentListReducer,
    showModal: showModalReducer,
    selectedBook: selectedBookReducer,
  },
});

// rendering my App component in my #root div
// setting provider so my redux states are available everywhere in my App
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
