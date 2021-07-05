import React from 'react';
import './App.css';
import BooksList from './Books/‌BooksList';
import NewBook from './NewBook/NewBook';

const App = () => {
  return (
    <div className="app">
      <NewBook />
      <BooksList />
    </div>
  );
};

export default App;
