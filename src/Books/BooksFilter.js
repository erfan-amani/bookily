import React from 'react';
import './BooksFilter.css';

const BooksFilter = ({ selectFilterHandler, selectedFilter }) => {
  const clickOnFilterHandler = (value) => {
    selectFilterHandler(value);
  };
  return (
    <div className="books-filter">
      <div
        className={`books-filter__filter ${
          selectedFilter === 'all' ? 'active' : ''
        }`}
        onClick={() => clickOnFilterHandler('all')}
      >
        All
      </div>
      <div
        className={`books-filter__filter ${
          selectedFilter === 'read' ? 'active' : ''
        }`}
        onClick={() => clickOnFilterHandler('read')}
      >
        Read
      </div>
      <div
        className={`books-filter__filter ${
          selectedFilter === 'not read' ? 'active' : ''
        }`}
        onClick={() => clickOnFilterHandler('not read')}
      >
        Not Read
      </div>
      <div
        className={`books-filter__filter ${
          selectedFilter === 'liked' ? 'active' : ''
        }`}
        onClick={() => clickOnFilterHandler('liked')}
      >
        Favorite
      </div>
    </div>
  );
};

export default BooksFilter;
