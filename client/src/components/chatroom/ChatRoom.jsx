import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import { css, keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const animation = props =>
  css`
    ${pulse} ${props.animationLength} infinite alternate;
  `

const PulseButton = styled.div`
  animation: ${animation};
`
const socket = io.connect('http://localhost:5000');

const Comp = styled.div`
  color: ${props =>
    props.$draggable || 'black'};
`;


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const FadeInButton = styled.div`
  animation: 1s ${fadeIn} ease-out;
`

const Button = styled.button`
font-family: sans-serif;
font-size: 1.3rem;
border: none;
border-radius: 5px;
padding: 7px 10px;
background: black;
color: white;
&:hover {
  background: red;
}
`;
const Input = styled.div`
font-family: sans-serif;
max-width: 1100px;
background: #fff;
margin: 30px auto;
overflow: hidden;
border-radius: 5px;
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
        <PulseButton key={index}>
          {name}: <span>{message}</span>
        </PulseButton>
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
      <Input><input size="350" name="message" type="text" placeholder="whats the move" onChange={e => handleChange(e)} value={state.message} required /></Input>
      <Button type="Submit">Send It</Button>
    </form>
  )

  return (
    < div id="chatroom" >
      <div>{form}</div>
      <div id="chat">
        <PulseButton><FadeInButton>#Whats the Move?</FadeInButton></PulseButton>
        {renderChat()}
      </div>
    </div >
  )
}
export default ChatRoom;