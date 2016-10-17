import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="app-header">
          <h3 className="top-title">...but more importantly</h3>
          <bold><h1 className="app-title">Who Speaks for <span>You</span>?</h1></bold>
          <h3 className="search-title">Find out.</h3>
        </div>
    );
  }
}

export default Header;
