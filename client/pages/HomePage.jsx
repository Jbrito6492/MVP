import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../store/actions/index.js";
import ChatRoom from "../components/chatroom/ChatRoom.jsx";
import UserList from "../components/user_list/UserList.jsx";

const Home = ({ auth }) => {
  return (
    <div>
      <ChatRoom />
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
export default {
  component: connect(mapStateToProps, { fetchCurrentUser })(Home),
};
