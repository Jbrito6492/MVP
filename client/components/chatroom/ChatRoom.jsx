import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { fetchCurrentUser } from "../../store/actions/index.js";

const socket = io.connect("http://localhost:5000");

const ChatRoom = (props, { auth }) => {
  const [name, setName] = useState({ name: "" });
  const [message, setMessage] = useState({ message: "" });
  const [chat, setChat] = useState([]);

  const handleChange = (e) => {
    setMessage({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = name;
    const { message } = message;
    socket.emit("message", { name, message });
    setMessage({ message: "" });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        {name}: <span>{message}</span>
      </div>
    ));
  };

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const form = (
    <form onSubmit={handleSubmit}>
      <label name="name" value={name} />
      <input
        size="350"
        name="message"
        type="text"
        placeholder="whats the move"
        onChange={(e) => handleChange(e)}
        value={message}
        required
      />
      <button type="Submit">Send It</button>
    </form>
  );

  return (
    <div id="chatroom">
      <div>{form}</div>
      <div id="chat">
        <span>#Whats the Move?</span>
        {renderChat()}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

function loadData(store) {
  return store.dispatch(fetchCurrentUser());
}

export { loadData };
export default connect(mapStateToProps, { fetchCurrentUser })(ChatRoom);
