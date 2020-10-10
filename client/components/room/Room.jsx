import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSession } from "../../store/actions/index.js";
import { Link } from "react-router-dom";
import { GrSend } from "react-icons/gr";
import { BsTrash2 } from "react-icons/bs";
import { HiOutlinePaperClip } from "react-icons/hi";
import {
  connectSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from "../../helpers/socketio.js";
import Map from "../map/Map.jsx";
import withStyles from "isomorphic-style-loader/withStyles";
import r from "../../css/room.css";
import styled from "styled-components";
import profilePic from "../../images/example-profile.png";

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
        <input type="text" placeholder="search" />
      </div>
      <div className={r.conversationList}>
        <div className={r.conversation}>
          <img src={profilePic} />
          <div className={r.titleText}>Jorge Play Play Garcia</div>
          <div className={r.createdDate}>Oct 9</div>
          <div className={r.conversationMessage}>
            this is a message from the play
          </div>
        </div>
        {chat.map((message, index) => (
          <p key={index}>
            <span>{username} </span>
            {message}
          </p>
        ))}
      </div>
      <div className={r.newMessageContainer}>
        <Link to="/">+</Link>
      </div>
      <div className={r.chatTitle}>
        <span>{room}</span>
        <div className={r.titleIconContainer}>
          {rooms.map((room, index) => (
            <button
              className={r.roomButtons}
              onClick={() => setRoom(room)}
              key={index}
            >
              {room}
            </button>
          ))}
          <BsTrash2 className={r.chatTitleIcon} />
          </div>
      </div>
      <div className={r.chatMessageList}></div>
      <div className={r.chatForm}>
        <HiOutlinePaperClip className={r.chatFormIcon} />
        <input
          id="icon_prefix"
          type="text"
          name="message"
          value={state.message}
          onChange={(e) => {
            setMessage({ ...state, [e.target.name]: e.target.value });
          }}
          required
        />
        <GrSend onClick={handleSubmit} className={r.chatFormSendIcon} />
      </div>
    </>
  );
};

export default withStyles(r)(Room);
