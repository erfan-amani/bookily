import React, { useState } from 'react';
import BooksFilter from './BooksFilter';
import './Books.css';
import BooksSearch from './BooksSearch';
import BooksList from './BooksList';

const Books = ({ items }) => {
  // const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const selectFilterHandler = (value) => {
    setSelectedFilter(value);
  };

  let filteredBooks = items;

  if (selectedFilter !== 'all') {
    filteredBooks = items.filter((book) =>
      selectedFilter === 'not read' ? !book.read : book[selectedFilter]
    );
  }

  return (
    <div className="books">
      <BooksSearch />
      <BooksFilter
        selectFilterHandler={selectFilterHandler}
        selectedFilter={selectedFilter}
      />
      <BooksList items={filteredBooks} />
    </div>
  );
};

export default Books;
