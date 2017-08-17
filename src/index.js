import 'purecss/build/pure.css';

import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';

render(
	<Routes />, 
	document.getElementById('root')
)

registerServiceWorker();