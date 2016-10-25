import React from 'react';
import axios from 'axios';

import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.requestData = this.requestData.bind(this);

    this.state = {
      stateName: this.props.params.stateId,
      results: {}
    };
  }

  componentDidMount() {
    this.requestData();
  }

  requestData() {
    const state = this.state.stateName;
    const apiKey = 'ec606ee7e9324581a094bd96aeb3d15e';
    const url = 'http://congress.api.sunlightfoundation.com/legislators?state_name=' + state + '&apikey=' + apiKey;

    axios.get(url)
      .then((res) => {
        console.log('res', res);

        let responseResults = res.data.results;
        console.log('responseResults', responseResults);

        this.setState({
          results: responseResults
        });

      })

      .catch((err) => {
        console.log('An error occurred =>', err);
      });

  }

  render() {
    return (
    	<div className="app">
	        <div className="wrapper">
	          <Results state={this.state.stateName} />
	        </div>
     	</div>
    );
  }
}

export default App;
