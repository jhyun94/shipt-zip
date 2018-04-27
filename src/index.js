import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware());



ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
