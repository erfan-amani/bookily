import React from 'react';
import './NewBookInput.css';

const NewBookInput = ({ label, className, value, changeHandler }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className={`input ${className}`}
        type="text"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default NewBookInput;
