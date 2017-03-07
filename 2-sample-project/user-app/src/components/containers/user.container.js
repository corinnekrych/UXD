import React, { Component } from 'react';
import User from '../views/user.view'
import * as api from '../../api/user.api'
import { connect } from 'react-redux';

export class UserContainer extends Component {
  
  componentDidMount() {
    this.props.dispatch(api.fetchUsers);
  }
  
  render() {
    if (!this.props.fetched) {
      return (<div className='spinner'></div>);
    }
    return (
      <div>
        <User user={this.props.users.find(e => e.id.toString() === this.props.params.userID)} />
      </div>
    );
  }
}
const mapStateToProps = function(store) {
  if (store.fetched) {
    return {
      users: store.users,
      fetched: store.fetched ? store.fetched: false
    };
  }
  return {
    fetched:  false
  };
};

export default connect(mapStateToProps)(UserContainer);
