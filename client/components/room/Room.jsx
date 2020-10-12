import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSession } from "../../store/actions/index.js";
import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";
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
      <div className={r.conversationList}>
        <div className={r.conversation}>
          <img src={profilePic} />
          <div className={r.titleText}>Jorge Garcia</div>
          <div className={r.createdDate}>Oct 10</div>
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
      <div className={r.chatMessageList}>
        <div className={`${r.youMessage} ${r.messageRow}`}>
          <div className={r.messageContent}>
            <div className={r.messageText}>whats up</div>
            <div className={r.messageTime}>Oct 10</div>
          </div>
        </div>
        <div className={`${r.messageRow} ${r.otherMessage}`}>
          <div className={r.messageContent}>
            <img src={profilePic} />
            <div className={r.messageText}>hey mayne</div>
            <div className={r.messageTime}>Oct 10</div>
          </div>
        </div>
      </div>
      <form className={r.chatForm} onSubmit={handleSubmit}>
        <input
          placeholder="send it"
          type="text"
          name="message"
          value={state.message}
          onChange={(e) => {
            setMessage({ ...state, [e.target.name]: e.target.value });
          }}
          required
        />
        <HiOutlinePaperClip className={r.chatFormIcon} />
        <BiSend className={r.chatFormSendIcon} onClick={handleSubmit} />
      </form>
    </>
  );
};

export default withStyles(r)(Room);
