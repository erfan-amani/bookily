import React, { useState } from 'react';
import './App.css';
import Books from './Books/‌Books';
import NewBook from './NewBook/NewBook';

const INITIAL_DATA = [
  {
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    liked: false,
    read: false,
    id: 'waplt27',
  },
  {
    name: 'Song of Solomon',
    author: 'Toni Morrison',
    liked: false,
    read: false,
    id: 'sostm98',
  },
  {
    name: 'Ulysses',
    author: 'James Joyce',
    liked: false,
    read: false,
    id: 'ujj57',
  },
  {
    name: 'The Shadow of the Wind',
    author: 'Carlos Ruiz Zafon',
    liked: false,
    read: false,
    id: 'tsotwcrz56',
  },
  {
    name: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    liked: false,
    read: false,
    id: 'tlotrjt',
  },
  {
    name: 'Great Gatsby',
    author: 'F. Scott Fitzgerald',
    liked: false,
    read: false,
    id: 'ggsf',
  },
];

const App = () => {
  const [booksData, setBooksData] = useState(INITIAL_DATA);

  return (
    <div className="app">
      <NewBook />
      <Books items={booksData} />
    </div>
  );
};

export default App;
