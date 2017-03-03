import React, { browserHistory } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import UserListContainer from './components/containers/user.list.container';
import UserContainer from './components/containers/user.container'

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={UserListContainer} />
      <Route path="/user/:userID" component={UserContainer} />
    </div>
  </Router>
  ,
  document.getElementById('root')
);
