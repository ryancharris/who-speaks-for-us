import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="app-header">
          <h1 className="app-title">Who <span>Speaks</span> for You?</h1>
          <h2 className="search-title">Find out.</h2>
        </div>
    );
  }
}

export default Header;
