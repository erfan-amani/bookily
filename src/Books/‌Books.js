import React from 'react';
import BooksFilter from './BooksFilter';
import './Books.css';
import BooksSearch from './BooksSearch';

const Books = () => {
  return (
    <div className="books">
      <BooksSearch />
      <BooksFilter />
    </div>
  );
};

export default Books;
