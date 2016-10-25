import React from 'react';
import Card from './Card';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.createCards = this.createCards.bind(this);
  }

  createCards() {
    const members = this.props.populateResults();
    console.log(members);
  }

  render() {

    return (
      <div>
        <div className="results-wrapper">
          {this.createCards()}
        </div>
      </div>
    );
  }
}

export default Results;
