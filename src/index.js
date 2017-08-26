import 'purecss/build/pure.css';

import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import Stores from './stores'
import { Provider } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';

render(
	<Provider contacts={stores.contacts}/>,
	<Routes />, 
	document.getElementById('root')
)

registerServiceWorker();