import './App.css';
import Books from './Books/‌Books';
import NewBook from './NewBook/NewBook';
import BooksProvider from './store/BooksProvider';

const App = () => {
  return (
    <div className="app">
      <BooksProvider>
        <NewBook />
        <Books />
      </BooksProvider>
    </div>
  );
};

export default App;
