import React from 'react';
import './App.css';
import Books from './Books/‌Books';
import NewBook from './NewBook/NewBook';

const App = () => {
  return (
    <div className="app">
      <NewBook />
      <Books />
    </div>
  );
};

export default App;
