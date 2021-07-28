import NewBookForm from './NewBookForm';
import './NewBook.css';

const NewBook = () => {
  return (
    <div className="new-book">
      <h1 className="header">Bookily</h1>
      <NewBookForm />
    </div>
  );
};

export default NewBook;
