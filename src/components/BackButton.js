import React from 'react';
import { Link } from 'react-router'

class BackButton extends React.Component {
	// constructor() {
	// 	super();
	// }

	render() {
		return (
			<div className="back-button">
				<Link to="/" activeClassName="active">
					<i className="fa fa-arrow-circle-o-left fa-3x" aria-hidden="true"></i>
					<p>Back</p>
				</Link>
			</div>
		);
	}
}

export default BackButton;
