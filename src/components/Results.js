import React from 'react';
import Card from './Card';
import Footer from './Footer';

class Results extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/*<h3 className="results-state">{this.props.state}</h3>*/}
        <div className="results-wrapper">
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
          <Card state={this.props.state} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Results;
