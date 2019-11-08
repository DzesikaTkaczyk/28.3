import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

import store from './store';
import routes from './routes';

render(
    <Provider store={store}>
    	<div>
        	<Router history={hashHistory} routes={routes}/>
        	<DevTools />
        </div>	
    </Provider>,
    document.getElementById('root')
);