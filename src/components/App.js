import React from 'react';
import axios from 'axios';

import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.requestData = this.requestData.bind(this);
    this.populateResults = this.populateResults.bind(this);

    this.state = {
      stateName: this.props.params.stateId,
      results: []
    };
  }

  componentDidMount() {
    // Do AJAX request based on { state: stateID }
    this.requestData(1);
  }

  populateResults() {
    return this.state.results;
  }

  requestData(pageNum) {
    const state = this.state.stateName;
    const apiKey = 'ec606ee7e9324581a094bd96aeb3d15e';
    const url = 'http://congress.api.sunlightfoundation.com/legislators?state_name=' + state + '&per_page=50&order=last_name_asc' + '&page=' + pageNum + '&apikey=' + apiKey;

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
