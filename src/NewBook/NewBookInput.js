import React from 'react';
import ErrorMessage from './ErrorMessage';
import './NewBookInput.css';

const NewBookInput = ({ label, value, changeHandler, error }) => {
  const className = `input-container ${error[label] ? 'error' : ''}`;
  return (
    <div className={className}>
      <div>
        <label>{label}</label>
      </div>
      <input
        className="input new-book-input"
        type="text"
        value={value}
        onChange={changeHandler}
      />
      {error[label] && <ErrorMessage title={error.title} />}
    </div>
  );
};

export default NewBookInput;
