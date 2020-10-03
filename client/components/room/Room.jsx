import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCurrentUser } from "../../store/actions/index.js";
import { GrSend } from "react-icons/gr";
import {
  connectSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from "../../helpers/socketio.js";

const Room = ({ auth, dispatch }) => {
  const rooms = ["StudyBuddy", "NetflixAndChill", "Excercise"];
  const name = useSelector((state) => state.auth);
  const [room, setRoom] = useState(rooms[0]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    name
    console.log("useEffect hook", name);
    if (room) connectSocket(room);
    subscribeToChat((err, data) => {
      if (err) return;
      setChat((prevChats) => [...prevChats, data]);
    });
    return () => {
      console.log("clean up");
      setChat((prevChats) => []);
      disconnectSocket();
    };
  }, [room, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(room, name, message);
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
              <div className="input-field col s12">
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  name="name"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <i className="material-icons prefix" onClick={handleSubmit}>
                  create
                </i>
                <label htmlFor="icon_prefix">send it</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      {chat.map((message, index) => (
        <p key={index}>
          <span className="flow-text">{name} </span>
          {message}
        </p>
      ))}
    </div>
  );
};

export default Room;
