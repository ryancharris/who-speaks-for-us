import React from 'react';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: this.props.params.stateId,
      results: {}
    };
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
