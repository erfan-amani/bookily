import React from 'react';

const BooksContext = React.createContext({
  books: [],
  addBook: (book) => {},
  removeBook: (id) => {},
  likeBook: (id) => {},
  readBook: (id) => {},
});

export default BooksContext;
