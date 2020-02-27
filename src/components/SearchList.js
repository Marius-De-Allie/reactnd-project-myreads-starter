import React from 'react';
// IMPORT BOOK ITEM COMPONENT INTO BOOKLIST.
import BookItem from './BookItem';

const SearchList = props => {
  const book = props.searchResults.error !== 'empty query' ?  
    props.searchResults.map(book => 
    <BookItem 
      title={book.title}
      author={book.authors}
      imageURL={book.imageLinks.thumbnail}
    />)
    : <p>No results please try another search term</p>;
  return (
    <div className={props.className}>
      <ol className="books-grid">
        {book}
      </ol>
    </div>
  );
};

export default SearchList;