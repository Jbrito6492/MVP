import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSession } from "../../store/actions/index.js";
import { GrSend } from "react-icons/gr";
import {
  connectSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from "../../helpers/socketio.js";
import Map from "../map/Map.jsx";
import withStyles from "isomorphic-style-loader/withStyles";
import r from "../../css/room.css";

const Room = (props) => {
  const { username } = useSelector((state) => state.auth);
  const rooms = ["StudyBuddy", "NetflixAndChill", "Excercise"];
  const [room, setRoom] = useState(rooms[0]);
  const [state, setMessage] = useState({ username, message: "" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (room) connectSocket(room);
    subscribeToChat((err, data) => {
      console.log("data", data);
      if (err) return;
      setChat((prevChats) => [...prevChats, data.message]);
    });
    return () => {
      console.log("clean up");
      setChat((prevChats) => []);
      disconnectSocket();
    };
  }, [room]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, message } = state;
    sendMessage(room, username, message);
    setMessage((prevMessage) => ({ ...prevMessage, message: "" }));
  };

  return (
    <>
      <div className={r.searchContainer}>
        <h1>{room}</h1>
        {rooms.map((room, index) => (
          <button
            className="waves-effect waves-light btn-small grey lighten-1"
            onClick={() => setRoom(room)}
            key={index}
          >
            {room}
          </button>
        ))}
      </div>
      <div className={r.conversationList}>
        conversation list
        {chat.map((message, index) => (
          <p key={index}>
            <span className="flow-text">{username} </span>
            {message}
          </p>
        ))}
      </div>
      <div className={r.newMessageContainer}></div>
      <div className={r.chatTitle}></div>
      <div className={r.chatMessageList}></div>
      <div className={r.chatForm}>
        <form onSubmit={handleSubmit}>
          <input
            id="icon_prefix"
            type="text"
            className="validate"
            name="message"
            value={state.message}
            onChange={(e) => {
              setMessage({ ...state, [e.target.name]: e.target.value });
            }}
            required
          />
          <button onClick={handleSubmit}>send it</button>
        </form>
      </div>
    </>
  );
};

export default withStyles(r)(Room);
