import React from 'react';
import './BooksSearch.css';
import closeIcon from '../icons/close-outline.svg';
import searchIcon from '../icons/search-outline.svg';

const BooksSearch = ({ searchTermChangeHandler, searchTerm }) => {
  const clearTheSearchTerm = (event) => {
    if (event.target.alt === 'close')
      searchTermChangeHandler({ target: { value: '' } });
  };

  return (
    <div className="books-search">
      <h3 className="books-search__header">Search for Books</h3>
      <input
        type="text"
        className="books-search__input"
        onChange={searchTermChangeHandler}
        value={searchTerm}
      />
      <img
        src={searchTerm === '' ? searchIcon : closeIcon}
        onClick={clearTheSearchTerm}
        alt={searchTerm === '' ? 'search' : 'close'}
      />
    </div>
  );
};

export default BooksSearch;
