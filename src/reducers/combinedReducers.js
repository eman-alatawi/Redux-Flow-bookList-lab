import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import selectedBookReducer from "./selectedBookReducer";

export default combineReducers({
  books: booksReducer,
  selectedBook: selectedBookReducer,
});
