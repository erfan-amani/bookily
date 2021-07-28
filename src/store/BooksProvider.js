import { useReducer } from 'react';
import BooksContext from './books-context';

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

const defaultBooksState = {
  books: INITIAL_DATA,
};

const booksReducer = (state, action) => {
  if (action.type === 'ADD') {
    const arr = [
      ...action.book.name.split(' '),
      ...action.book.author.split(' '),
    ];
    const id =
      arr.reduce((id, word) => id + word[0].toLowerCase(), '') +
      Math.round(Math.random() * 100);

    const newBook = {
      ...action.book,
      id,
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

    const updatedBooks = [...state.books];
    updatedBooks[bookIndex].like = !updatedBooks[bookIndex].like;

    return {
      books: updatedBooks,
    };
  }
  if (action.type === 'READ') {
    const bookIndex = state.books.findIndex((book) => book.id === action.id);

    const updatedBooks = [...state.books];
    updatedBooks[bookIndex].read = !updatedBooks[bookIndex].read;

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
