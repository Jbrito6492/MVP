import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const ChatRoom = () => {
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);


  const handleChange = (e) => {
    setState(...state, { [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', { name, message })
    this.setState({ message: '', name })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => {
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    })
  }

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })
  const form = (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} required />
      <input name="message" type="text" placeholder="whats the move" onChange={handleChange} required />
      <input type="submit" value="Submit" />
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