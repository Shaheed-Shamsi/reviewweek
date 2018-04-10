import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main.js';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
    <Main />
    </Provider>,
    document.getElementById('main')
);
