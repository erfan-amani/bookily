import React from 'react';
import './BooksFilter.css';

const BooksFilter = () => {
  return (
    <div className="books-filter">
      <div className="books-filter__filter active">All</div>
      <div className="books-filter__filter">Read</div>
      <div className="books-filter__filter">Not Read</div>
      <div className="books-filter__filter">Favorite</div>
    </div>
  );
};

export default BooksFilter;
