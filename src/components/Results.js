import React from 'react';
import Header from './Header';

class Results extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    	<div className="app">
	        <div className="wrapper">
	          <Header />
	          <h1>RESULTS PAGE</h1>
	        </div>
     	</div>
    );
  }
}

export default Results;
