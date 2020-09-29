import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../store/actions/index.js";
import ChatRoom from "../components/chatroom/ChatRoom.jsx";
import UserList from "../components/user_list/UserList.jsx";
import Header from "../components/header/Header.jsx";
import LogInPage from "./LogInPage.jsx";

const Home = ({ auth }) => {
  const renderView = () => {
    if (auth === null) {
      return <div>...Loading</div>;
    } else if (auth === false) {
      return (
        <div>
          <Header />
          <LogInPage />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <ChatRoom />
        </div>
      );
    }
  };
return <div>{renderView()}</div>;
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
