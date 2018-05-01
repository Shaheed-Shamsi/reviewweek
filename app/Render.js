import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import Main from './components/Main.js';
import store from './store';
import history from './history';

ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
    <Main />
    </Router>
    </Provider>,
    document.getElementById('main')
);
