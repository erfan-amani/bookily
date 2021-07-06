import React, { useState } from 'react';
import './App.css';
import Books from './Books/‌Books';
import NewBook from './NewBook/NewBook';

const INITIAL_DATA = [
  {
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    liked: true,
    read: true,
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
    liked: true,
    read: false,
    id: 'tlotrjt',
  },
  {
    name: 'Great Gatsby',
    author: 'F. Scott Fitzgerald',
    liked: false,
    read: true,
    id: 'ggsf',
  },
];

const App = () => {
  const [booksData, setBooksData] = useState(INITIAL_DATA);

  const addNewBookHandler = (value) => {
    const arr = [...value.name.split(' '), ...value.author.split(' ')];
    const id = arr.reduce((id, word) => id + word[0].toLowerCase(), '');

    const newBookData = {
      name: value.name,
      author: value.author,
      liked: false,
      read: false,
      id: id,
    };
    setBooksData((prev) => [newBookData, ...prev]);
  };

  const deleteBookHandler = (id) => {
    setBooksData((prev) => prev.filter((book) => book.id !== id));
  };

  const likeBookHandler = (id) => {
    setBooksData((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, liked: !book.liked } : book
      )
    );
  };

  const readBookHandler = (id) => {
    setBooksData((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  return (
    <div className="app">
      <NewBook addNewBookHandler={addNewBookHandler} />
      <Books
        items={booksData}
        deleteBookHandler={deleteBookHandler}
        likeBookHandler={likeBookHandler}
        readBookHandler={readBookHandler}
      />
    </div>
  );
};

export default App;
