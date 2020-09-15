import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudyBuddy from '../rooms/StudyBuddy.jsx';
import Main from '../home/Main.jsx';
import axios from 'axios';
import ChatRoom from '../chatroom/ChatRoom.jsx';
import Auth from '../sign_in/Auth.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
font-family: sans-serif;
display: flex;
flex-flow: no-wrap;
background-color:#333;
color:#fff;
padding:20px;
margin:20px 0;
`;



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
    return (
      <Wrapper>
      <div>
        { this.renderView()}
      </div>
      </Wrapper>
    )
  }
}

export default App;

