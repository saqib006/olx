import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import Routing from './Routes';

ReactDOM.render( <Provider store={store}><Routing /></Provider>, document.getElementById('root'));
registerServiceWorker();
