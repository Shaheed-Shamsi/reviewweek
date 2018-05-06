import { combineReducers } from 'redux';
import userReducer from './user.js';
import cardsReducer from './cards.js';

const reducer = combineReducers({
    users: userReducer,
    cards: cardsReducer
});

export default reducer
