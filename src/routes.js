import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/';
import NotFound from './components/NotFound/';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Layout} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;