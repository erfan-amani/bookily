import React from 'react';
import './BooksListItem.css';
import trash from '../icons/trash-outline.svg';
import heartFill from '../icons/heart.svg';
import heartOutline from '../icons/heart-outline.svg';
import checkboxOutline from '../icons/checkbox-outline.svg';
import squareOutline from '../icons/square-outline.svg';

const BooksListItem = ({
  name,
  author,
  like,
  read,
  id,
  deleteBookHandler,
  likeBookHandler,
  readBookHandler,
}) => {
  return (
    <div className="books-list-item">
      <div className="books-list-item__name">{name}</div>
      <div className="books-list-item__author">{author}</div>
      <div className="books-list-item__actions">
        <img
          src={read ? checkboxOutline : squareOutline}
          alt="read"
          onClick={() => readBookHandler(id)}
        />
        <img src={trash} alt="trash" onClick={() => deleteBookHandler(id)} />
        <img
          src={like ? heartFill : heartOutline}
          alt="like"
          onClick={() => likeBookHandler(id)}
        />
      </div>
    </div>
  );
};

export default BooksListItem;
