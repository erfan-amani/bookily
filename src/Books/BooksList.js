import React from 'react';
import './BooksList.css';
import BooksListItem from './BooksListItem';

const BooksList = () => {
  return (
    <div className="books-list">
      <BooksListItem />
    </div>
  );
};

export default BooksList;
