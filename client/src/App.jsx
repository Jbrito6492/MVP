import React from 'react';
import StudyBuddy from './components/StudyBuddy.jsx';
import { Switch, Route } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/" render={props => (
          <StudyBuddy />
        )} />
      </Switch >
    )
  }
}

export default App;