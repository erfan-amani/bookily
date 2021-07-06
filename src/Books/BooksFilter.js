import React from 'react';
import './BooksFilter.css';
import FilterButton from './FilterButton';

const BooksFilter = ({ selectFilterHandler, selectedFilter }) => {
  const clickOnFilterHandler = (value) => {
    selectFilterHandler(value);
  };
  return (
    <div className="books-filter">
      <FilterButton
        value="All"
        clickOnFilterHandler={clickOnFilterHandler}
        selectedFilter={selectedFilter}
      />
      <FilterButton
        value="Read"
        clickOnFilterHandler={clickOnFilterHandler}
        selectedFilter={selectedFilter}
      />
      <FilterButton
        value="Not read"
        clickOnFilterHandler={clickOnFilterHandler}
        selectedFilter={selectedFilter}
      />
      <FilterButton
        value="Liked"
        clickOnFilterHandler={clickOnFilterHandler}
        selectedFilter={selectedFilter}
      />
    </div>
  );
};

export default BooksFilter;
