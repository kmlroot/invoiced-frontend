import React from 'react';

import { 
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'

import Collection from './components/Collection/';
import Show from './components/Contact/Show';
import NotFound from './components/NotFound/';

const history = createHistory();

const Routes = () => {
	return (
		<Router history={history} >
			<Switch>
				<Route exact path='/' component={Collection} />
				<Route path='/contacts/:contactId' component={Show} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Routes;