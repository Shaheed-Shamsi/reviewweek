import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/user';

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware))
