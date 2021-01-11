import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSession, getDate } from "../../store/actions/index.js";
import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import { HiOutlinePaperClip } from "react-icons/hi";
import dayjs from "dayjs";
import {
  connectSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from "../../helpers/socketio.client.js";
import ChatView from "./ChatView.jsx";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "../../css/room.css";

const Room = (props) => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth);
  const rooms = ["StudyBuddy", "NetflixAndChill", "Excercise"];
  const [room, setRoom] = useState(rooms[0]);
  const [state, setState] = useState({ username, message: "" });
  const [isUser, setIsUser] = useState(false);
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    dispatch(getDate());
    if (room) connectSocket(room);
    subscribeToChat((err, data) => {
      if (err) return;
      setChat((prevChats) => [...prevChats, data]);
    });
    return () => {
      console.log("clean up");
      setChat([]);
      disconnectSocket();
    };
    console.log("chat", chat);
  }, [room]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, message } = state;
    let now = dayjs();
    sendMessage(room, username, message, now.format("h:mm:ss a"));
    setState((prevState) => ({
      ...prevState,
      message: "",
    }));
    setIsTyping(false);
  };

  return (
    <>
      <div className={styles.newMessageContainer}>
        <Link to="/">+</Link>
      </div>
      <ChatView isTyping={isTyping} chat={chat} username={state.username} />
      <form className={styles.chatForm} onSubmit={handleSubmit}>
        <input
          placeholder="send it"
          type="text"
          name="message"
          value={state.message}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
          required
        />
        <HiOutlinePaperClip className={styles.chatFormIcon} />
        <BiSend className={styles.chatFormSendIcon} onClick={handleSubmit} />
      </form>
    </>
  );
};

export default withStyles(styles)(Room);
