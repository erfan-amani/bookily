import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ title }) => {
  return <div className="error-message">*{title}</div>;
};

export default ErrorMessage;
