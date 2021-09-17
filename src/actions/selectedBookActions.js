export const selectBook = (selectedBook) => {
  return {
    type: "SELECT_BOOK",
    payload: { selectedBook },
  };
};
