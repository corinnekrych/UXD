import * as api from './user.api';
import fetchMock from 'fetch-mock';

const users = [{id: "1", name: "barbara"}, {id: "2", name: "adrian"}, {id: "3", name: "zoe"}];
fetchMock.get('*', users);

it('getUsers should return a sorted list of users', (done) => {
  const fn = api.getUsers();
  fn(value => { 
    expect(value).toEqual({
      type: 'GET_USERS_SUCCESS',
      users: [users[2], users[0], users[1]],
      fetched: true
    });
    done();
  })
});
