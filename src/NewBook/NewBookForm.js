import React, { useState } from 'react';
import './NewBookForm.css';
import NewBookInput from './NewBookInput';

const NewBookForm = ({ addNewBookHandler }) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [error, setError] = useState({
    title: 'Invalid value',
  });

  const nameChangeHandler = (event) => {
    setError((prev) => {
      return { ...prev, Name: false };
    });
    setEnteredName(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setError((prev) => {
      return { ...prev, Author: false };
    });
    setEnteredAuthor(event.target.value);
  };

  const emptyInputs = (event = null) => {
    if (event) event.preventDefault();
    setEnteredName('');
    setEnteredAuthor('');
  };

  const submitNewBookFormHandler = (event) => {
    event.preventDefault();

    if (enteredName === '' && enteredAuthor === '') {
      setError((prev) => {
        return { ...prev, Name: true, Author: true };
      });
      return;
    } else if (enteredName === '') {
      setError((prev) => {
        return { ...prev, Name: true, Author: false };
      });
      return;
    } else if (enteredAuthor === '') {
      setError((prev) => {
        return { ...prev, Name: false, Author: true };
      });
      return;
    }

    emptyInputs();
    addNewBookHandler({ name: enteredName, author: enteredAuthor });
  };

  return (
    <form className="new-book-form" onSubmit={submitNewBookFormHandler}>
      <p>Add New Book:</p>
      <div className="new-book-form__inputs">
        <NewBookInput
          label={'Name'}
          value={enteredName}
          changeHandler={nameChangeHandler}
          error={error}
        />
        <NewBookInput
          label={'Author'}
          value={enteredAuthor}
          changeHandler={authorChangeHandler}
          error={error}
        />
      </div>
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
