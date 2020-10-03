import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../store/actions/index.js";
import Room from "../components/room/Room.jsx";
import UserList from "../components/user_list/UserList.jsx";
import Header from "../components/header/Header.jsx";
import { Redirect } from "react-router-dom";

@connect((store) => {
  return {
    auth: store.auth,
  };
})
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.renderView = this.renderView.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCurrentUser());
  }

  renderView() {
    const { auth } = this.props;
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
            <Redirect to="/login" />
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
            <Room />
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}
