import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router'

import './css/index.css';
import Search from './components/Search';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Search} />
				<Match exactly pattern="/state/:stateId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}


render(<Root />, document.querySelector('#main'));
