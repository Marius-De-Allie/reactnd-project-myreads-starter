import React from 'react';

const SearchBookShelfChanger = props => {
  const onShelfChange = (evt) => {
    const shelfValue = evt.target.value.trim();
    props.changeShelfSearch(props.result.id, shelfValue);
  };
  return (
    <div className="book-shelf-changer">
      <select value={props.result.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default SearchBookShelfChanger;