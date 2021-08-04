import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import './BooksList.css';
import BooksListItem from './BooksListItem';

const BooksList = ({
  items,
  deleteBookHandler,
  likeBookHandler,
  readBookHandler,
}) => {
  return (
    <TransitionGroup className="books-list" component="div">
      {items.map((book) => (
        <CSSTransition key={book.id} timeout={500} classNames="item">
          <BooksListItem
            {...book}
            deleteBookHandler={deleteBookHandler}
            likeBookHandler={likeBookHandler}
            readBookHandler={readBookHandler}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default BooksList;
