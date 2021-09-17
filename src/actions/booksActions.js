export const setBooks = (books) => {
    return {
      type: "SET_BOOKS",
      payload: { books },
    };
  };

export const addBook = (book) => {
  return {
    type: "ADD_BOOK",
    payload: { book },
  };
};

export const removeBook = (book) => {
  return {
    type: "REMOVE_BOOK",
    payload: { book },
  };
};


