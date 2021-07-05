import React from 'react';
import './BooksSearch.css';

const BooksSearch = () => {
  return (
    <div className="books-search">
      <h3 className="books-search__header">Search for Books</h3>
      <input type="text" className="books-search__input" />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
};

export default BooksSearch;
