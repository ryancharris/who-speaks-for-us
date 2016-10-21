import React from 'react';
import headshot from '../img/headshot.jpg';

class Card extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="card">
				<h3>Sen. Ryan Harris</h3>
				<img src={headshot} alt="" />
				<p>Pennsylvania (I)</p>
				<ul className="card-links">
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
					<li>7</li>
				</ul>
			</div>
		);
	}
}

export default Card;
