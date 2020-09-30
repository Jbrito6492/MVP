import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../store/actions/index.js";
import ChatRoom from "../components/chatroom/ChatRoom.jsx";
import UserList from "../components/user_list/UserList.jsx";
import Header from "../components/header/Header.jsx";
import { Link } from "react-router-dom";

const Home = ({ auth }) => {
  const renderView = () => {
    if (auth === null) {
      return (
        <div>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (auth === false) {
      return (
        <div>
          <div>
            <Header />
          </div>
          <div className="container">
            <Link to="/login">LogIn</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <Header />
          </div>
          <div className="container">
            <ChatRoom />
          </div>
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
