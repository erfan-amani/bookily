import React, { useState } from 'react';
import './NewBookForm.css';
import NewBookInput from './NewBookInput';

const NewBookForm = ({ addNewBookHandler }) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const emptyInputs = (event = null) => {
    if (event) event.preventDefault();
    setEnteredName('');
    setEnteredAuthor('');
  };

  const submitNewBookFormHandler = (event) => {
    event.preventDefault();

    emptyInputs();
    addNewBookHandler({ name: enteredName, author: enteredAuthor });
  };

  return (
    <form className="new-book-form" onSubmit={submitNewBookFormHandler}>
      <p>Add New Book:</p>
      <NewBookInput
        label={'Name'}
        className={'new-book-input'}
        value={enteredName}
        changeHandler={nameChangeHandler}
      />
      <NewBookInput
        label={'Author'}
        className={'new-book-input'}
        value={enteredAuthor}
        changeHandler={authorChangeHandler}
      />
      <div className="new-book-form__buttons">
        <a href="." onClick={emptyInputs}>
          Cansel
        </a>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewBookForm;
