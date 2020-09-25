import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/actions/index.js';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.username}</li>;
    });
  }

  render() {
    return (
      <div>
        list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData }
export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};