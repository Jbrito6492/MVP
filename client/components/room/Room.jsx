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
    <div>
      <div className="container">
        <div className="center-align">
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
          <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
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
            <span className="flow-text">{username} </span>
            {message}
          </p>
        ))}
      </div>

      <div id="modal1" className="modal bottom-sheet">
        <div className="modal-content">

        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect btn-flat grey lighten-1"
          >
            Agree
          </a>
        </div>
      </div>
    </div>
  );
};

export default Room;
