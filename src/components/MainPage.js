import React from 'react';
import CurrentReadList from './CurrentReadList';
import FutureReadList from './FutureReadList';
import PrevReadList from './PrevReadList';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currRead: [],
      prevRead: [],
      futureRead: []
    }
  }
  render() {
    const currentBooks = this.props.books.filter(book => book.shelf === 'currentlyReading');
    let bookshelfBooks;
    return (
      <div className="list-books">
        <div className="list-books-content">
          <CurrentReadList current={current} />
          <FutureReadList />
          <PrevReadList />
        </div>
      </div>
    );
  }
};

export default MainPage;

