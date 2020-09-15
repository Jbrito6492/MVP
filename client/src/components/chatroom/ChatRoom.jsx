import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const socket = io.connect('http://80');

const Button = styled.button`
font-family: sans-serif;
font-size: 1.3rem;
border: none;
border-radius: 5px;
padding: 7px 10px;
background: black;
color: white;
&:hover {
  background: #FFA500;
}
`;
const Input = styled.div`
font-family: sans-serif;
max-width: 1100px;
background: #fff;
margin: 30px auto;
overflow: hidden;
`;

const ChatRoom = (props) => {
  const [state, setState] = useState({ message: '', name: props.name });
  const [chat, setChat] = useState([]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit('message', { name, message })
    setState({ name, message: '' })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })

  const form = (
    <form onSubmit={handleSubmit}>
      <label name="name" value={name} />
      <Input><input name="message" type="text" placeholder="whats the move" onChange={e => handleChange(e)} value={state.message} required /></Input>
      <Button type="Submit">Send It</Button>
    </form>
  )

  return (
    < div id="chatroom" >
      <div>{form}</div>
      <div id="chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div >
  )
}
export default ChatRoom;