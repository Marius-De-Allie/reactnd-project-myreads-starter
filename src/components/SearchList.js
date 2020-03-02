import React from 'react';
// IMPORT BOOK ITEM COMPONENT INTO BOOKLIST.
import BookItem from './BookItem';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }
  // Function for making Async search request to BooksAPI.
  searchSubmit = async(query) => {
    const searchResult = await BooksAPI.search(query);
    // Check whether serach result array exists.
    if(searchResult.error !== 'empty query') {
      // Loop through search results and add shelf property to each result object. 
      searchResult.forEach(result => result.shelf = '');
    }
    console.log(searchResult);
    // console.log(this.state.searchResults);
  };
  renderResults = () => {
    
  };
  render() {
    return (
      <div className={props.className}>
        <ol className="books-grid">
          {book}
        </ol>
      </div>
    );
  }
}
// = props => {
//   const book = props.searchResults.error !== 'empty query' ?  
//     props.searchResults.map(book => 
//     <BookItem 
//       title={book.title}
//       author={book.authors}
//       imageURL={book.imageLinks.thumbnail}
//     />)
//     : <p>No results please try another search term</p>;
// };

export default SearchList;

