import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.buttonActivate = this.buttonActivate.bind(this);
    this.buttonDeactivate = this.buttonDeactivate.bind(this);
    this.goToResults = this.goToResults.bind(this);
  }

  buttonActivate() {
    document.querySelector('.deactivated').className = "search-button activated";
  }

  buttonDeactivate() {
    document.querySelector('.activated').className = "search-button deactivated";
  }

  goToResults(event) {
    event.preventDefault();
    // Get user input
    const stateId = this.searchInput.value;
    // Re-route to Results component
    this.context.router.transitionTo(`/state/${stateId}`);
  }

  render() {
    return (
      <form className="user-search" onFocus={this.buttonActivate} onBlur={this.buttonDeactivate} onSubmit={this.goToResults}>
        <input type="text" required placeholder="e.g. Pennsylvania" ref={(input) => {this.searchInput = input}} />
        <input className="search-button deactivated" type="submit" value="🔍" />
      </form>
    );
  }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object
}

export default SearchBar;
