import React from 'react';
import './BooksList.css';
import BooksListItem from './BooksListItem';

const BooksList = ({
  items,
  deleteBookHandler,
  likeBookHandler,
  readBookHandler,
}) => {
  return (
    <div className="books-list">
      {items.map((book) => (
        <BooksListItem
          name={book.name}
          author={book.author}
          liked={book.liked}
          read={book.read}
          key={book.id}
          id={book.id}
          deleteBookHandler={deleteBookHandler}
          likeBookHandler={likeBookHandler}
          readBookHandler={readBookHandler}
        />
      ))}
    </div>
  );
};

export default BooksList;
