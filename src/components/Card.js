import React from 'react';
import headshot from '../img/headshot.jpg';

class Card extends React.Component {
	constructor() {
		super();
		this.getPhoto = this.getPhoto.bind(this);
		this.getPartyColor = this.getPartyColor.bind(this);
		this.positionInfo = this.positionInfo.bind(this);
	}

	getPartyColor() {
		// Assign class to <Card /> based on party affiliation
		if (this.props.party === 'R') {
			return "card republican";
		} else if (this.props.party === 'D') {
			return "card democrat";
		} else {
			return "card independent";
		}
	}

	getPhoto() {
		const bioguide = this.props.bioguide;
		// Images hosted on: github.com/unitedstates/images
		const imgLink = `http://theunitedstates.io/images/congress/450x550/${bioguide}.jpg`;
		return imgLink;
	}

	positionInfo() {
		if (this.props.chamber === 'house') {
			return `District ${this.props.district}`;
		} else {
			return `${this.props.rank.charAt(0).toUpperCase()}${this.props.rank.slice(1)}`;
		}
	}

	render() {
		return (
			<div className={this.getPartyColor()}>
				<img src={this.getPhoto()} alt="" />
				<h3>{this.props.name}</h3>
				<p>{this.positionInfo()} ({this.props.party})</p>
				<ul className="card-links">
					{this.props.socialList}
				</ul>
			</div>
		);
	}
}

export default Card;
