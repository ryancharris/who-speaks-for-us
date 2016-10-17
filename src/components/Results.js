import React from 'react';
import Footer from './Footer';

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      stateName: '',
      results: {}
    };
  }

  render() {
    return (
    	<div className="app">
	        <div className="wrapper">
	          <h1>RESULTS PAGE</h1>
            <Footer />
	        </div>
     	</div>
    );
  }
}

export default Results;
