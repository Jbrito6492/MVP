import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCurrentUser, logOut } from "../../store/actions/index.js";
import { GrSend } from "react-icons/gr";
import {
  connectSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from "../../helpers/socketio.js";

const Room = ({ auth }) => {
  const rooms = ["StudyBuddy", "NetflixAndChill", "Excersize"];
  const [room, setRoom] = useState(rooms[0]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (room) connectSocket(room);
    subscribeToChat((err, data) => {
      if (err) return;
      setChat((prevChats) => [data, ...prevChats]);
    });
    return () => {
      disconnectSocket();
    };
  }, [room]);

  return (
    <div>
      <h1>room: {room}</h1>
      {rooms.map((room, index) => (
        <button onClick={setRoom(room)} key={index}>
          {room}
        </button>
      ))}

      <h1>chat</h1>
      <input
        type="text"
        name="name"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => sendMessage(room, message)}>send it</button>
      {chat.map((message, index) => (
        <p key={index}>{m}</p>
      ))}
    </div>
  );
};

export default Room;
