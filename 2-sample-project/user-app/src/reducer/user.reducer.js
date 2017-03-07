// Action type
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';


// Reducers
const userReducer = function(state = {users: [], fetched: false}, action) {
  switch(action.type) {
    
    case GET_USERS_SUCCESS:
      return {...state, users: action.users, fetched: true};
    default:
      return state;
  }
};

export default userReducer;