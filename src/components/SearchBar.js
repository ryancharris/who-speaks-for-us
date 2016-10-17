import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-search">
        <form className="user-search" autocomplete="on">
          <input type="text" required placeholder="e.g. Pennsylvania" />
        </form>
        <button className="search-button" type="submit">🔍</button>
      </div>
    );
  }
}

export default SearchBar;
