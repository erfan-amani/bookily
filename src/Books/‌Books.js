import { useState, useContext } from 'react';
import BooksFilter from './BooksFilter';
import './Books.css';
import BooksSearch from './BooksSearch';
import BooksList from './BooksList';
import BooksContext from '../store/books-context';

const Books = () => {
  const booksCtx = useContext(BooksContext);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const selectFilterHandler = (value) => {
    setSelectedFilter(value);
  };

  const searchTermChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredBooks = booksCtx.books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedFilter !== 'all') {
    filteredBooks = booksCtx.books.filter((book) =>
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
        deleteBookHandler={booksCtx.removeBook}
        likeBookHandler={booksCtx.likeBook}
        readBookHandler={booksCtx.readBook}
      />
    </div>
  );
};

export default Books;
