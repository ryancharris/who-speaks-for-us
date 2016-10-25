import React from 'react';
import Card from './Card';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.createCards = this.createCards.bind(this);
  }

  createCards() {
    // Get member info from App's state
    const results = this.props.populateResults();
    const cards = [];
    // Create array from results object
    for (let i = 0; i < results.length; i++) {
      let member = results[i];

      // Unique id for each Card
      let key = this.props.state + '-member-' + i;

      // Format name
      let title = member.title;
      let middlename = (member.middle_name) ? ' ' + member.middle_name + ' ' : ' ';
      let name = title + '. ' + member.first_name + middlename + member.last_name;

      // Create social media list
      let socialList = this.createSocialList(member);

      cards.push(<Card key={key} name={name} state={member.state_name} socialList={socialList} />);
    }

    return cards;
  }

  createSocialList(member) {
    console.log(member);
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
