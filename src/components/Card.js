import React from 'react';
import missingImage from '../img/missing-image.jpg';

class Card extends React.Component {
	constructor() {
		super();
		this.doesPicExist = this.doesPicExist.bind(this);
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

	doesPicExist(urlToFile) {
		// detect if profile image exists in GitHub repo
		const xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    if (xhr.status === 404) {
        return false;
    } else {
        // console.log("File exists");
        return true;
    }
	}

	getPhoto() {
		// Images hosted on: github.com/unitedstates/images
		const bioguide = this.props.bioguide;
		const imgLink = `https://theunitedstates.io/images/congress/450x550/${bioguide}.jpg`;
		let pic;

		// test for existing image and either return it or a placeholder
		if (this.doesPicExist(imgLink)) {
			pic = imgLink;
		} else {
			pic = missingImage;
		}

		return pic;
	}

	positionInfo() {
		// Check to see if this is a 'one representative' state
		if (this.props.chamber === 'house' && this.props.district === 0) {
			return 'At Large';
		// Print district for other states
		} else if (this.props.chamber === 'house') {
			return `District ${this.props.district}`;
		// Print state rank for Senators
		} else {
			return `${this.props.rank.charAt(0).toUpperCase()}${this.props.rank.slice(1)}`;
		}
	}

	render() {
		return (
			<div className={this.getPartyColor()}>
				<div className="profile-pic-container">
					<img src={this.getPhoto()} alt="" />
				</div>
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
