import React from 'react';
import './NewBookForm.css';
import NewBookInput from './NewBookInput';

const NewBookForm = () => {
  return (
    <form className="new-book-form">
      <p>Add New Book:</p>
      <NewBookInput label={'Name'} className={'new-book-input'} />
      <NewBookInput label={'Author'} className={'new-book-input'} />
      <div className="new-book-form__buttons">
        <a href=".">Cansel</a>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewBookForm;
