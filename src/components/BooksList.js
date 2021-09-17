import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBooks, removeBook } from "../actions/booksActions";
import { selectBook } from "../actions/selectedBookActions";
import booksData from "../books";
import NewBookForm from "./NewBookForm";

function BooksList() {
  const [shouldShowBookForm, toggleShowBookForm] = useState(false);

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBooks(booksData));
  }, []);

  const handleRemoveBook = (e, book) => {
    e.stopPropagation();
    dispatch(removeBook(book));
  };

  const handleToggleBookForm = () => {
    toggleShowBookForm(!shouldShowBookForm);
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div
          onClick={() => dispatch(selectBook(book))}
          key={book.id}
          className="book-list-item"
        >
          <span className="title">{book.title}</span>
          <button onClick={(e) => handleRemoveBook(e, book)} className="delete">
          <i class="fas fa-times"></i>
          </button>
        </div>
      ))}
      {shouldShowBookForm ? (
        <NewBookForm handleToggleBookForm={handleToggleBookForm} />
      ) : (
        <div onClick={handleToggleBookForm} className="book-list-item new">
          <i class="fas fa-plus"></i> Add New Book
        </div>
      )}
    </div>
  );
}

export default BooksList;
