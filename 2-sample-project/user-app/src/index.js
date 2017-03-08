import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import UserListContainer from './components/containers/user.list.container';
import UserContainer from './components/containers/user.container'
import userReducer from './reducer/user.reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const middleware = [ thunk ];
const store = createStore(
  userReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={UserListContainer} />
        <Route path="/user/:userID" component={UserContainer} />
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
