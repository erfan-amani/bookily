import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import BooksContext from './books-context';

const INITIAL_DATA = [
  {
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    like: true,
    read: true,
    id: uuid(),
  },
  {
    name: 'Song of Solomon',
    author: 'Toni Morrison',
    like: false,
    read: false,
    id: uuid(),
  },
  {
    name: 'Ulysses',
    author: 'James Joyce',
    like: false,
    read: false,
    id: uuid(),
  },
  {
    name: 'The Shadow of the Wind',
    author: 'Carlos Ruiz Zafon',
    like: false,
    read: false,
    id: uuid(),
  },
  {
    name: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    like: true,
    read: false,
    id: uuid(),
  },
  {
    name: 'Great Gatsby',
    author: 'F. Scott Fitzgerald',
    like: false,
    read: true,
    id: uuid(),
  },
];

const defaultBooksState = {
  books: INITIAL_DATA,
};

const booksReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newBook = {
      ...action.book,
      id: uuid(),
      like: false,
      read: false,
    };
    const updatedBooks = [newBook, ...state.books];

    return { books: updatedBooks };
  }
  if (action.type === 'REMOVE') {
    const updatedBooks = state.books.filter((book) => book.id !== action.id);

    return {
      books: updatedBooks,
    };
  }
  if (action.type === 'LIKE') {
    const bookIndex = state.books.findIndex((book) => book.id === action.id);
    const book = state.books[bookIndex];

    const existBook = {
      ...book,
      like: !book.like,
    };

    const updatedBooks = [...state.books];
    updatedBooks[bookIndex] = existBook;

    return {
      books: updatedBooks,
    };
  }
  if (action.type === 'READ') {
    const bookIndex = state.books.findIndex((book) => book.id === action.id);
    const book = state.books[bookIndex];

    const existBook = {
      ...book,
      read: !book.read,
    };

    const updatedBooks = [...state.books];
    updatedBooks[bookIndex] = existBook;

    return {
      books: updatedBooks,
    };
  }

  return defaultBooksState;
};

const BooksProvider = (props) => {
  const [booksState, dispatchBooksAction] = useReducer(
    booksReducer,
    defaultBooksState
  );

  const addBook = (book) => {
    dispatchBooksAction({ type: 'ADD', book });
  };

  const removeBook = (id) => {
    dispatchBooksAction({ type: 'REMOVE', id });
  };

  const likeBook = (id) => {
    dispatchBooksAction({ type: 'LIKE', id });
  };

  const readBook = (id) => {
    dispatchBooksAction({ type: 'READ', id });
  };

  return (
    <BooksContext.Provider
      value={{
        books: booksState.books,
        addBook,
        removeBook,
        likeBook,
        readBook,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
