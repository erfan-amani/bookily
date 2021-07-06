import React from 'react';
import './BooksListItem.css';

const BooksListItem = ({ name, author, liked, read }) => {
  return (
    <div className="books-list-item">
      <div className="books-list-item__name">{name}</div>
      <div className="books-list-item__author">{author}</div>
      <div className="books-list-item__actions">
        <ion-icon name="square-outline"></ion-icon>
        {/* <ion-icon name="checkbox-outline"></ion-icon> */}
        <ion-icon name="trash-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        {/* <ion-icon name="heart" style={{ color: '#C84B31' }}></ion-icon> */}
      </div>
    </div>
  );
};

export default BooksListItem;
