import axios from 'axios';

const GET_ALL_INFO = 'GET_ALL_INFO';

const getAllInfo = function(cards) {
    return {
        type: GET_ALL_INFO,
        cards
    }
}

export const fetchAllInfo = function() {
    return (dispatch) => {
        axios.get('api/user/all')
        .then(res => res.data)
        .then(cards => {
            const action = getAllInfo(cards)
            return dispatch(action)
    //    'UNDERSTAND THIS CODEEEEEE'
        })
        .catch(err => console.error(err, 'error in your thunk!'))
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_INFO:
            return action.cards
        default:
            return state
    }
}
