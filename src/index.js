import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();