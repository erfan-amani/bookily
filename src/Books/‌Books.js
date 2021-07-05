import React from 'react';
import BooksFilter from './BooksFilter';
import './Books.css';
import BooksSearch from './BooksSearch';
import BooksList from './BooksList';

const Books = () => {
  return (
    <div className="books">
      <BooksSearch />
      <BooksFilter />
      <BooksList />
    </div>
  );
};

export default Books;
