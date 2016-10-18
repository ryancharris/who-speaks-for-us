import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.buttonActivate = this.buttonActivate.bind(this);
    this.buttonDeactivate = this.buttonDeactivate.bind(this);
    this.goToResults = this.goToResults.bind(this);
  }

  buttonActivate() {
    document.querySelector('#search-button').className = "activated";
    
  }

  buttonDeactivate() {
    document.querySelector('#search-button').className = "deactivated";
  }

  goToResults(event) {
    event.preventDefault();
    const stateId = this.searchInput.value;
    this.context.router.transitionTo(`/state/${stateId}`);
  }

  render() {
    return (
      <div className="search-block">
        <form className="user-search" onFocus={this.buttonActivate} onBlur={this.buttonDeactivate} onSubmit={this.goToResults}>
          <input type="text" required placeholder="e.g. Pennsylvania" ref={(input) => {this.searchInput = input}} />
          <button id="search-button" className="deactivated" type="submit">🔍</button>
        </form>
      </div>
    );
  }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object
}

export default SearchBar;
