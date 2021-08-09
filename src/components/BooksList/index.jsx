import React from 'react';
import './BooksList.css';
import Book from 'components/Book';

const BooksList = ({ booksList, toggleFav, toggleToRead }) => {
  return (
    <div className="cards">
      {booksList.map((bookData) => (
        <Book
          data={bookData}
          key={`${bookData.isbn}-${(bookData.publishedDate && bookData.publishedDate.$date && bookData.publishedDate.$date !=="") ? bookData.publishedDate.$date : "0"}`}
          toggleFavBook={toggleFav(bookData.isbn)}
          toggleToReadBook={toggleToRead(bookData.isbn)}
        />
      ))}
    </div>
  );
};

export default BooksList;
