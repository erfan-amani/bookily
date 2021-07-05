import React from 'react';
import './BooksList.css';
import BooksSearch from './BooksSearch';

const BooksList = () => {
  return (
    <div className="book-list">
      <BooksSearch />
    </div>
  );
};

export default BooksList;
