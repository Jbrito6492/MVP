import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudyBuddy from './StudyBuddy.jsx';
import Main from './Main.jsx';
import axios from 'axios';
import ChatRoom from './ChatRoom.jsx';
import Join from './Join.jsx';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'main'
    }
    this.changeView = this.changeView.bind(this);
  }
  changeView(option) {
    this.setState({
      view: option
    })
  }
  renderView() {
    if (this.state.view === 'main') {
      return (
        <Switch>
          <Route path="/" component={() => <ChatRoom changeView={this.changeView} />} />
        </Switch>
      )
    }
  }
  render() {
    return (
      <div>
        { this.renderView()}
      </div>

    )
  }
}

export default App;