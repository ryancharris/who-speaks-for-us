import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router'

import './css/index.css';
import App from './components/App';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const repo = `/${window.location.pathname}`;

const Root = () => {
	return (
		<BrowserRouter basename={repo}>
			<div>
				<Match exactly pattern="/" component={Search} />
				<Match exactly pattern="/state/:stateId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}


render(<Root />, document.querySelector('#main'));
