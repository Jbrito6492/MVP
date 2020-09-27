import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../header/Header.jsx';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/index.js';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData }
export default {
  component: connect(mapStateToProps, { fetchCurrentUser })(App)
};


