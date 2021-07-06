import React from 'react';
import './NewBook.css';
import NewBookForm from './NewBookForm';

const NewBook = ({ addNewBookHandler }) => {
  return (
    <div className="new-book">
      <h1 className="header">Bookily</h1>
      <NewBookForm addNewBookHandler={addNewBookHandler} />
    </div>
  );
};

export default NewBook;
