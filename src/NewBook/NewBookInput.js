import React from 'react';
import './NewBookInput.css';

const NewBookInput = ({ label, className }) => {
  return (
    <div>
      <label>{label}</label>
      <input className={`input ${className}`} type="text" />
    </div>
  );
};

export default NewBookInput;
