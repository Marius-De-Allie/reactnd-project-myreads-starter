import React from 'react';
// IMPORT SEARCH INPUT COMPONENT INTO SEARCH PAGE
import SearchInput from './SearchInput';
// IMPORT BOOK LIST COMPONENT INTO SEARCH PAGE.
import SearchList from './SearchList';

class SearchPage extends React.Component {
  state = {
    searchResults: []
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <SearchInput searchSubmit={props.searchSubmit} />
        </div>
        <SearchList 
          className="search-books-results" 
          searchResults={props.searchResults}
        />
      </div>
    );
  }
};

export default SearchPage;