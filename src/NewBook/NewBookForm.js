import React, { useRef } from 'react';
import './NewBookForm.css';
import useInput from '../hooks/use-input';

const NewBookForm = ({ addNewBookHandler }) => {
  const submitButtonRef = useRef();

  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    onChange: nameChangeHandler,
    onBlur: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: author,
    valueIsValid: authorIsValid,
    hasError: authorHasError,
    onChange: authorChangeHandler,
    onBlur: authorBlurHandler,
    reset: resetAuthor,
  } = useInput((value) => value.trim() !== '');

  const formIsValid = nameIsValid && authorIsValid;

  const submissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
    addNewBookHandler({ name, author });

    submitButtonRef.current.focus(); // blur input after submiting by focusing on button
    resetForm();
  };

  const resetForm = () => {
    resetName();
    resetAuthor();
  };

  const nameClasses = nameHasError ? 'control invalid' : 'control';
  const authorClasses = authorHasError ? 'control invalid' : 'control';

  return (
    <>
      <form className="new-book-form" onSubmit={submissionHandler}>
        <p>Add New Book:</p>
        <div className="inputs">
          <div className={nameClasses}>
            <label htmlFor="name">Book Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <span className="error-text">Name can't be empty!</span>
            )}
          </div>
          <div className={authorClasses}>
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={authorChangeHandler}
              onBlur={authorBlurHandler}
            />
            {authorHasError && (
              <span className="error-text">Name can't be empty!</span>
            )}
          </div>
        </div>
        <div className="buttons">
          <button type="reset" className="cansel" onClick={resetForm}>
            Cansel
          </button>
          <button
            ref={submitButtonRef}
            type="submit"
            className="submit"
            disabled={!formIsValid}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default NewBookForm;
