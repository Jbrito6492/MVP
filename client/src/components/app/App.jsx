import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudyBuddy from '../rooms/StudyBuddy.jsx';
import Main from '../home/Main.jsx';
import axios from 'axios';
import ChatRoom from '../chatroom/ChatRoom.jsx';
import Auth from '../sign_in/Auth.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      username: '',
    }
    this.changeView = this.changeView.bind(this);
  }
  changeView(option) {
    this.setState({
      username: option
    })
  }
  renderView() {
    if (this.state.username === '') {
      return (
        <div><Auth changeView={this.changeView} /></div>
      )
    } else if (this.state.view === 'main') {
      return (
        <div><Main changeView={this.changeView} /></div>
      )
    } else {
      return (
        <div>
        <ChatRoom name={this.state.username} changeView={this.changeView} />
        </div>
      )
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        { this.renderView()}
      </div>
    )
  }
}

export default App;