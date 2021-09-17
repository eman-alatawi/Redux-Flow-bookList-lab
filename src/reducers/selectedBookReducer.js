const selectedBookReducer = (selectedBook = null, action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return action.payload.selectedBook;
    default:
      return selectedBook;
  }
};

export default selectedBookReducer;
