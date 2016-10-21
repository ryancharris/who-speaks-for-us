import React from 'react';
import Footer from './Footer';
import Card from './Card';

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
	          <h3 className="results-state">California</h3>
            <div className="results-wrapper">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <Footer />
	        </div>
     	</div>
    );
  }
}

export default Results;
