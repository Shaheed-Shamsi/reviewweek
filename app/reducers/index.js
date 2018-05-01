import { combineReducers } from 'redux';
import userReducer from './user.js';

const reducer = combineReducers({
    users: userReducer,

});

export default reducer
