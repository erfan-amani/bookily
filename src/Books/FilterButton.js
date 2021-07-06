import React from 'react';

const FilterButton = ({ selectedFilter, clickOnFilterHandler, value }) => {
  const className = `books-filter__filter ${
    selectedFilter === value.toLowerCase() ? 'active' : ''
  }`;

  return (
    <div
      className={className}
      onClick={() => clickOnFilterHandler(value.toLowerCase())}
    >
      {value}
    </div>
  );
};

export default FilterButton;
