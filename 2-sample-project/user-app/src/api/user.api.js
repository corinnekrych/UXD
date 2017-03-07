function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJson(response) {
  return response.json();
}

function sortByNameDescending(slice) {
  if (!slice instanceof Array) {
    return slice
  }
  return slice.sort(function sortName(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA === nameB ? 0 : nameA < nameB ? 1 : -1;
  })
}

function httpUsersCall() {
  return fetch('http://jsonplaceholder.typicode.com/users', {
    method: 'get',
    headers: {
      accept: 'application/json'
    }
  });
}
// define actions
// TODO put in action.js file
const shouldFetchUsers = (state) => {
  if (!state.fetched) {
    return true
  }
  return false
};

const receivedUsers = users => ({
  type: 'GET_USERS_SUCCESS',
  users,
  fetched: true
});

export function getUsers() {
  return dispatch => {
    return httpUsersCall()
      .then(checkStatus)
      .then(parseJson)
      .then(sortByNameDescending)
      .then(users => dispatch(receivedUsers(users)));
  }
}

export const fetchUsers = (dispatch, getState) => {
  if (shouldFetchUsers(getState())) {
    return dispatch(getUsers(getState()));
  }
};
