import React from 'react';
import './BooksListItem.css';

const BooksListItem = ({ name, author, liked, read }) => {
  return (
    <div className="books-list-item">
      <div className="books-list-item__name">{name}</div>
      <div className="books-list-item__author">{author}</div>
      <div className="books-list-item__actions">
        <ion-icon
          name={read ? 'checkbox-outline' : 'square-outline'}
        ></ion-icon>
        <ion-icon name="trash-outline"></ion-icon>
        <ion-icon name={liked ? 'heart' : 'heart-outline'}></ion-icon>
      </div>
    </div>
  );
};

export default BooksListItem;
