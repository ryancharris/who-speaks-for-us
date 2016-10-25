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
      results: {}
    };
  }

  componentDidMount() {
    // Do AJAX request based on { state: stateID }
    this.requestData();
  }

  populateResults() {
    return this.state.results;
  }

  requestData() {
    const state = this.state.stateName;
    const apiKey = 'ec606ee7e9324581a094bd96aeb3d15e';
    const url = 'http://congress.api.sunlightfoundation.com/legislators?state_name=' + state + '&apikey=' + apiKey;

    axios.get(url)
      .then((res) => {
        // Create object with data from response
        let responseResults = res.data.results;
        // Set state with copy of response data
        this.setState({
          results: responseResults
        });
        // Create Cards based on the response
        this.populateResults();
      })
      .catch((err) => {
        console.log('An error occurred =>', err);
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
