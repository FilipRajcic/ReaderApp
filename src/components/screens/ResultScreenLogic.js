import BooksItem from "../BooksItem";

const renderBooks = (books, fromMyBooks) =>
  // rendering all books that is passed
  books.map((book) => {
    return <BooksItem key={book.key} book={book} fromMyBooks={fromMyBooks} />;
  });

export { renderBooks };
