import React from 'react';
import './BooksSearch.css';

const BooksSearch = ({ searchTermChangeHandler, searchTerm }) => {
  return (
    <div className="books-search">
      <h3 className="books-search__header">Search for Books</h3>
      <input
        type="text"
        className="books-search__input"
        onChange={searchTermChangeHandler}
        value={searchTerm}
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
};

export default BooksSearch;
