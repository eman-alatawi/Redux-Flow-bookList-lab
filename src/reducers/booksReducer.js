const booksReducer = (books = [], action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return action.payload.books;
    case "ADD_BOOK":
      return [...books, action.payload.book];
    case "REMOVE_BOOK":
      let newBooks = [...books];
      newBooks.splice(books.indexOf(action.payload.book), 1);
      return newBooks;
    default:
      return books;
  }
};
export default booksReducer;
