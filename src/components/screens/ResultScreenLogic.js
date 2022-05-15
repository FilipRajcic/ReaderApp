import BooksItem from "../BooksItem";

const renderBooks = (books, showReadFunction) =>
  books.map((book) => {
    return (
      <BooksItem
        key={book.key}
        book={book}
        showReadFunction={showReadFunction}
      />
    );
  });

export { renderBooks };
