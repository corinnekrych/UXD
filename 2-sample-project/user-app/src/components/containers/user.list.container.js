import React, { Component } from 'react';
import * as api from '../../api/user.api'
import UserList from '../views/user.list.view';
import { connect } from 'react-redux';

export class UserListContainer extends Component {
  
  componentDidMount() {
    this.props.dispatch(api.fetchUsers);
  }
  
  
  render() {
    if (!this.props.fetched) {
      return (<div className='spinner'></div>);
    }
    return (<UserList users={this.props.users} />);
  }
}

const mapStateToProps = function(store) {
  return {
    users: store.users,
    fetched: store.fetched
  };
};

export default connect(mapStateToProps)(UserListContainer);
