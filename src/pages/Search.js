import React from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

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
