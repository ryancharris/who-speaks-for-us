import React from 'react';
import Card from '../components/Card';
import BackButton from '../components/BackButton';
import stateList from '../state-list.js';
import { realState } from '../helpers.js';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.createCards = this.createCards.bind(this);
    this.genStateHeader = this.genStateHeader.bind(this);
  }

  componentWillMount() {
    let currentPath = location.pathname.slice(7);
    console.log('currentPath', currentPath);

    if(currentPath.indexOf('%') !== -1) {
      const spaceIndex = currentPath.indexOf('%');
      console.log('spaceIndex', spaceIndex);

      currentPath = currentPath.slice(0, spaceIndex) + ' ' + currentPath.slice(spaceIndex + 3);
      console.log('currentPath', currentPath);
    }

    if( !realState(currentPath) ) {
        location.pathname = "/notfound/";
    }

  }

  createCards() {
    // Get member info from App's state
    let results = this.props.populateResults();
    let cards = [];

    // Create array from results object
    for (let i = 0; i < results.length; i++) {
      let member = results[i];
      // Format name
      let middlename = (member.middle_name) ? ' ' + member.middle_name.charAt(0).toUpperCase() + '. ' : ' ';
      let name = `${member.title}. ${member.first_name} ${middlename} ${member.last_name}`;
      // Create social media list
      let socialList = this.createSocialList(member);

      // Create Card with necessary props
      cards.push(<Card key={member.bioguide_id} name={name} state={member.state_name} socialList={socialList} party={member.party} bioguide={member.bioguide_id} chamber={member.chamber} rank={member.state_rank} district={member.district} />);
    }
    return cards;
  }

  createSocialList(member) {
    // Create an array for social media info
    let socialList = [];
    // Parse out member's social information and add to socialList
    if (member.website != null) {
      socialList.push(
        <li>
          <a href={member.website}>
            <i className="fa fa-globe" aria-hidden="true"></i>
          </a>
        </li>
      );
    }

    if (member.oc_email != null) {
      let emailLink = `mailto:${member.oc_email}`;
      socialList.push(
        <li>
          <a href={emailLink}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
      );
    }

    if (member.phone != null) {
      let telephoneLink = `tel:${member.phone}`;
      socialList.push(
        <li>
          <a href={telephoneLink}>
            <i className="fa fa-phone" aria-hidden="true"></i>
          </a>
        </li>
      );
    }

    if (member.facebook_id != null) {
      let facebookLink = `http://www.facebook.com/${member.facebook_id}`;
      socialList.push(
        <li>
          <a href={facebookLink}>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
      );
    }

    if (member.twitter_id != null) {
      let twitterLink = `http://www.twitter.com/${member.twitter_id}`;
      socialList.push(
        <li>
          <a href={twitterLink}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
      );
    }

    if (member.youtube_id != null) {
      let youtubeLink = `http://www.youtube.com/user/${member.youtube_id}`;
      socialList.push(
        <li>
          <a href={youtubeLink}>
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </li>
      );
    }

    // Return list to createCards()
    return socialList;
  }

  genStateHeader() {
    const state = this.props.state;

    // If abbreviation, look up full name in stateList
    if(state.length === 2) {
      return stateList[state];
    } else {
      // If not, just return the validated name
      return state;
    }

  }

  render() {
    return (
      <div>
        <h1 className="results-header">{this.genStateHeader()}</h1>
        <div className="results-wrapper">
          {this.createCards()}
          <BackButton />
        </div>
      </div>
    );
  }
}

export default Results;
