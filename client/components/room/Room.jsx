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
      setChat((prevChats) => []);
      disconnectSocket();
    };
  }, [room]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(room, message);
    setMessage((prevMessage) => "");
  };

  return (
    <div className="container">
      <div className="center-align">
        <h1>{room}</h1>
        {rooms.map((room, index) => (
          <button
            className="waves-effect waves-light btn-small pink lighten-3"
            onClick={() => setRoom(room)}
            key={index}
          >
            {room}
          </button>
        ))}
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12"></div>
              <input
                id="icon_prefix"
                className="validate"
                name="name"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="waves-effect waves-light btn-small pink lighten-3"
                type="submit"
                onClick={handleSubmit}
              >
                send it
              </button>
            </div>
          </form>
        </div>
      </div>
      {chat.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default Room;
