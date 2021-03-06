import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSession, getDate } from "../../store/actions/index.js";
import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import dayjs from "dayjs";
import {
  connectSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from "../../../socketio/socketio.client.js";
import ChatView from "./ChatView.jsx";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "../../css/room.css";

const Room = ({ username }) => {
  const dispatch = useDispatch();
  const { room } = useSelector((state) => state.hashtags);
  const [state, setState] = useState({ username, message: "" });
  const [isUser, setIsUser] = useState(false);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    dispatch(getDate());
    if (room) connectSocket(room);
    subscribeToChat((err, data) => {
      if (err) return;
      setChat((prevChats) => [...prevChats, data]);
    });

    return () => {
      setChat([]);
      disconnectSocket();
    };
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
  };

  return (
    <>
      <div className={styles.newMessageContainer}>
        <Fab style={{ color: "#C38FFF" }} aria-label="add">
          <AddIcon style={{ color: "#1D1D1D" }} fontSize="large" />
        </Fab>
      </div>
      <ChatView chat={chat} username={state.username} />
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
        <HiOutlineEmojiHappy className={styles.chatFormIcon} />
        <BiSend className={styles.chatFormSendIcon} onClick={handleSubmit} />
      </form>
    </>
  );
};

export default withStyles(styles)(Room);
