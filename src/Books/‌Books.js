import React, { useState } from 'react';
import BooksFilter from './BooksFilter';
import './Books.css';
import BooksSearch from './BooksSearch';
import BooksList from './BooksList';

const Books = ({
  items,
  deleteBookHandler,
  likeBookHandler,
  readBookHandler,
}) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const selectFilterHandler = (value) => {
    setSelectedFilter(value);
  };

  const searchTermChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredBooks = items.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedFilter !== 'all') {
    filteredBooks = items.filter((book) =>
      selectedFilter === 'not read' ? !book.read : book[selectedFilter]
    );
  }

  return (
    <div className="books">
      <BooksSearch
        searchTermChangeHandler={searchTermChangeHandler}
        searchTerm={searchTerm}
      />
      <BooksFilter
        selectFilterHandler={selectFilterHandler}
        selectedFilter={selectedFilter}
      />
      <BooksList
        items={filteredBooks}
        deleteBookHandler={deleteBookHandler}
        likeBookHandler={likeBookHandler}
        readBookHandler={readBookHandler}
      />
    </div>
  );
};

export default Books;
