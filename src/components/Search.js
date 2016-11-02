import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';

class Search extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Header />
          <SearchBar />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Search;
