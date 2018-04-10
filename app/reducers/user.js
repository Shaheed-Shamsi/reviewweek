import axios from 'axios';

const GET_ALL_USERS = 'GET_ALL_USERS';

const getAllUsers = function(users) {
    return {
        type: GET_ALL_USERS,
        users: users
    }
};

export const fetchAllUsers = function() {
    return (dispatch) => {
        axios.get('/api/user')
        .then(res => res.data)
        .then(users => {
            const action = getAllUsers(users)
            return dispatch(action)
        })
        .catch(err => console.error(err, 'error in your thunk!'))
    }
};

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return Object.assign({}, state, {users: [action.users]})
        default:
            return state
    }
}
