import React from 'react';
import './BooksList.css';
import BooksListItem from './BooksListItem';

const BooksList = ({ items }) => {
  return (
    <div className="books-list">
      {items.map((book) => (
        <BooksListItem
          name={book.name}
          author={book.author}
          liked={book.liked}
          read={book.read}
        />
      ))}
      {/* <BooksListItem /> */}
    </div>
  );
};

export default BooksList;
