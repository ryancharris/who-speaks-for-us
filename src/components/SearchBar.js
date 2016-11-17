import React from 'react';
import axios from 'axios';
import stateList from '../state-list.js';
import { capitalize } from '../helpers.js'

class SearchBar extends React.Component {
  constructor() {
    super();
    this.buttonActivate = this.buttonActivate.bind(this);
    this.buttonDeactivate = this.buttonDeactivate.bind(this);
    this.goToResults = this.goToResults.bind(this);
    this.realState = this.realState.bind(this);
  }

  buttonActivate() {
    document.querySelector('.deactivated').className = "search-button activated";
  }

  buttonDeactivate() {
    document.querySelector('.activated').className = "search-button deactivated";
  }

  goToResults(event) {
    // Prevent form submission
    event.preventDefault();

    // Get user input from state
    let stateId = this.searchInput.value;

    // If user inputs a proper state, reroute them to Results
    // If not, prompt them to re-input their search
    if (this.realState(stateId)) {

      // Format user input for re-route
      if (stateId.length === 2) {
        stateId = stateId.toUpperCase();
      } else if (stateId.length > 2) {
        stateId = capitalize(stateId);
      }

      this.context.router.transitionTo(`/state/${stateId}`);

    } else {
      document.getElementById("tooltiptext").style.opacity = 1;
    }
  }

  realState(input) {
    let stateAbbreviations = [];
    let stateNames = [];

    // Input is not a valid state name or abbreviation
    if (input.length === 1) {
      return false;
    } else if (input.length === 2) {
      // See if input is a valid state abbreviation
      stateAbbreviations = Object.keys(stateList);

      if (stateAbbreviations.indexOf(input.toUpperCase()) !== -1 ) {
        // If input is in array of abbreviations, return true
        return true;
      } else {
        // If input is not in the array, return false
        return false;
      }
      
    } else {
      // See if input is a valid state name
      stateNames = Object.values(stateList);
      
      if (stateNames.indexOf(capitalize(input)) !== -1 ) {
        // If input is in array of names, return true
        return true;
      } else {
        // If not, return false
        return false;
      }

    }
  }

  render() {
    return (
      <div className="tooltip">
        <form className="user-search" onFocus={this.buttonActivate} onBlur={this.buttonDeactivate} onSubmit={this.goToResults}>
          <input type="text" required placeholder="e.g. Pennsylvania" ref={(input) => {this.searchInput = input}} />
          <button type="submit" className="search-button deactivated"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
        <span id="tooltiptext">Please try again</span>
      </div>
    );
  }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object
}

export default SearchBar;
