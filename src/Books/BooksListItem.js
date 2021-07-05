import React from 'react';
import './BooksListItem.css';

const BooksListItem = () => {
  return (
    <div className="books-list-item">
      <div className="books-list-item__name">Into the wild</div>
      <div className="books-list-item__author">Jhon morphy</div>
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
