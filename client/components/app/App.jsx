import React from 'react';
import { renderRoutes } from 'react-router-config';
import {fetchCurrentUser} from '../../redux/actions/index.js';

const App = ({ route }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default {
  component: App,
  loadData: ({dispatch}) => dispatch(fetchCurrentUser())
};

