import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./components/App";
import booksResultsReducer from "./reducers/booksResultsReducer";
import myBooksReducer from "./reducers/myBooksReducer";
import myBooksReducerCopy from "./reducers/myBooksReducerCopy";
import booksListReducer from "./reducers/booksListReducer";
import showModalReducer from "./reducers/showModalReducer";

const container = document.querySelector("#root");
const root = createRoot(container);

const store = configureStore({
  reducer: {
    booksResults: booksResultsReducer,
    myBooks: myBooksReducerCopy,
    currentList: booksListReducer,
    showModal: showModalReducer,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
