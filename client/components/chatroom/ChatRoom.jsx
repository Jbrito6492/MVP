import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { fetchCurrentUser } from "../../store/actions/index.js";
import { GrSend } from "react-icons/gr";

const socket = io.connect("http://localhost:5000");

const ChatRoom = ({ auth }) => {
  const [state, setState] = useState({ message: "" });
  const [chat, setChat] = useState([]);

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { message } = state;
    setState({ message: "" });
    socket.emit("message", { message });
  };

  const renderChat = () => {
    return chat.map(({ message }, index) => (
      <div key={index}>
        <h3>
          {auth}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  useEffect(() => {
    fetchCurrentUser();
    const { message } = state;
    if (message) {
      socket.on("message", ({ message }) => {
        setChat([...chat, { message }]);
      });
    }
  });

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        size="350"
        name="message"
        type="text"
        placeholder="whats the move"
        onChange={(e) => handleChange(e)}
        value={state.message}
        required
      />
      <a
        className="waves-effect waves-light btn red lighten-1"
        onClick={handleSubmit}
      >
        Send It
      </a>
    </form>
  );

  return (
    <div>
      <div>{form}</div>
      <div>
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
