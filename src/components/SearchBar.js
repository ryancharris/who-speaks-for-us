import React from 'react';
import axios from 'axios';
import stateList from '../state-list.js';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.buttonActivate = this.buttonActivate.bind(this);
    this.buttonDeactivate = this.buttonDeactivate.bind(this);
    this.goToResults = this.goToResults.bind(this);
    this.validateUserInput = this.validateUserInput.bind(this);
  }

  buttonActivate() {
    document.querySelector('.deactivated').className = "search-button activated";
  }

  buttonDeactivate() {
    document.querySelector('.activated').className = "search-button deactivated";
  }

  goToResults(event) {
    event.preventDefault();
    // Get user input from state
    let stateId = this.validateUserInput(this.searchInput.value);
    // console.log('returned validated input', stateId);

    this.context.router.transitionTo(`/state/${stateId}`);
  }

  validateUserInput(input) {
    // const apiKey = 'ec606ee7e9324581a094bd96aeb3d15e';
    // let validInput = ''

    // axios.get(`http://openstates.org/api/v1//metadata/?apikey=${apiKey}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     let responseArray = res.data;

    //     for (let i = 0; i < responseArray.length; i++) {
    //       if (input.toLowerCase() === responseArray[i].abbreviation.toLowerCase() || input.toLowerCase() === responseArray[i].name.toLowerCase()) {
    //         console.log('input matches', input);
    //         validInput = responseArray[i].name;
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // console.log('validInput  = ', validInput);
    return input;
  }

  render() {
    return (
      <form className="user-search" onFocus={this.buttonActivate} onBlur={this.buttonDeactivate} onSubmit={this.goToResults}>
        <input type="text" required placeholder="e.g. Pennsylvania" ref={(input) => {this.searchInput = input}} />
        <button type="submit" className="search-button deactivated"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    );
  }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object
}

export default SearchBar;
