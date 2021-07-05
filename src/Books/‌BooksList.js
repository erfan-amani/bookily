import React from 'react';
import BooksFilter from './BooksFilter';
import './BooksList.css';
import BooksSearch from './BooksSearch';

const BooksList = () => {
  return (
    <div className="book-list">
      <BooksSearch />
      <BooksFilter />
    </div>
  );
};

export default BooksList;
