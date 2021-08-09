import React from 'react';
import './App.css';
import data from './books.json';
import InputSearchWithOptions from 'components/InputSearchWithOptions';
import BooksList from 'components/BooksList';

function App() {
  console.log(data);
   
  const booksArrayLS = window.localStorage.getItem("booksArray");
  const booksArrayInit = (!booksArrayLS || booksArrayLS === "") ? data.books[0] : JSON.parse(booksArrayLS);
  const [booksArray, setBooksArray] = React.useState(booksArrayInit);
  //const [booksArray, setBooksArray] = React.useState(data.books[0]);
  let nbBooks = booksArray.length;
  console.log("booksArray : ", booksArray); 
  console.log("nbBooks : ", nbBooks);
   
  const search = () => {
    let searchValue = document.getElementById('searchText').value; 
    console.log(searchValue);
    setBooksArray(booksArray.filter(book => book.title.includes(searchValue)));
    console.log("booksArray searched : ", booksArray);
    nbBooks = booksArray.length;
    console.log("nbBooks searched : ", nbBooks);
  }
   
  const toggleFav = (isbn) => (e) => {
    e.stopPropagation();
    console.log("toggleFav for isbn :", isbn);
    setBooksArray(
      booksArray.map((book) => {
        if (book.isbn !== isbn) return book;
        return { ...book, isFav: !book.isFav };
      })
    );
    console.log("booksArray updated : ", booksArray);
    window.localStorage.setItem("booksArray", JSON.stringify(booksArray));
  }
   
  const toggleToRead = (isbn) => (e) => {
    e.stopPropagation();
    console.log("toggleToRead for isbn :", isbn);
    setBooksArray(
      booksArray.map((book) => {
        if (book.isbn !== isbn) return book;
        return { ...book, read: !book.read };
      })
    );
    console.log("booksArray updated : ", booksArray);
    window.localStorage.setItem("booksArray", JSON.stringify(booksArray));
  }
   
  return (
    <div className="App">
      <InputSearchWithOptions onClick={search} />
      <BooksList booksList={booksArray} toggleFav={toggleFav} toggleToRead={toggleToRead} /> 
    </div>
  );
}

export default App;
