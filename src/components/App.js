import React from 'react';
import axios from 'axios';
// import stateList from '../state-list.js';

import Results from '../pages/Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.requestData = this.requestData.bind(this);
    this.populateResults = this.populateResults.bind(this);
    this.formatUserInput = this.formatUserInput.bind(this);

    this.state = {
      stateName: this.props.params.stateId,
      results: []
    };
  }

  componentDidMount() {
    // Do AJAX request based on { state: stateID }
    this.requestData(1);
  }

  componentWillUnmount() {
    // When component unmounts, return {this.state.results} to an empty array
    this.setState({
      results: []
    });
  }

  populateResults() {
    return this.state.results;
  }

  requestData(pageNum) {
    const apiKey = 'ec606ee7e9324581a094bd96aeb3d15e';
    const state = this.formatUserInput(this.state.stateName);
    const url = `https://congress.api.sunlightfoundation.com/legislators${state}&per_page=50&order=chamber___desc,last_name__asc&page=${pageNum}&apikey=${apiKey}`;
    let currentState = this.state.results;

    axios.get(url)
      .then((res) => {
        // Get # of results in request
        let responseCount = res.data.count;

        // Create object with data from response
        let responseResults = currentState.concat(res.data.results);

        // Set state with copy of response data
        this.setState({
          results: responseResults
        });

        // If the first request was made and there are more results than
        // returned by the API, call requestData again
        if (pageNum === 1 && responseCount > responseResults.length) {
          this.requestData(2);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  formatUserInput(searchInput) {
    let searchParams = '';

    // If the input is 2 characters, treat it as a state abbrev (ex. PA, UT, IA)
    if (searchInput.length === 2) {
      // Capitalize the state abbreviation
      searchParams = `?state=${searchInput}`;
      return searchParams;
      
    } else if (searchInput.length > 2) {
      // If longer, treat it as a state name
      searchParams = `?state_name=${searchInput}`;
      return searchParams;

    }
  }

  render() {
    return (
    	<div className="app">
	        <div className="wrapper">
	          <Results state={this.state.stateName} populateResults={this.populateResults} />
	        </div>
     	</div>
    );
  }
}

export default App;
