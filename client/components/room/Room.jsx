import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSession, fetchHashtags } from "../../store/actions/index.js";
import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";
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
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth);
  const [hashtag, setHashtag] = useState([]);
  const [room, setRoom] = useState(null);
  const [state, setMessage] = useState({ username, message: "" });
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setHashtag(() => dispatch(fetchHashtags()));

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
    setIsTyping(false);
  };
  console.log("testing", hashtag);
  return (
    <>
      <div className={r.newMessageContainer}>
        <Link to="/">+</Link>
      </div>
      <div className={r.chatMessageList}>
        <div className={`${r.youMessage} ${r.messageRow}`}>
          <div className={r.messageContent}>
            {chat.map((message, index) => (
              <div key={index} className={r.youMessageContainer}>
                <div className={r.messageText}>{message}</div>
                <div className={r.messageTime}>Oct 10</div>
              </div>
            ))}
            {isTyping && (
              <div className={r.youMessageContainer}>
                <div className={`${r.loading} ${r.messageText}`}></div>
              </div>
            )}
          </div>
        </div>
        <div className={`${r.messageRow} ${r.otherMessage}`}>
          <div className={r.messageContent}>
            <img src={profilePic} />
            <div className={r.messageText}>whats happening</div>
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
            setIsTyping(true);
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
