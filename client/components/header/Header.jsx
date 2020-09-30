import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser, logOut } from "../../store/actions/index.js";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.header = this.header.bind(this);
    this.loading = this.loading.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  componentDidUpdate() {
    this.props.fetchCurrentUser();
  }

  handleClick() {
    this.props.logOut();
  }

  header(button) {
    return (
      <nav>
        <div className="nav-wrapper red lighten-1">
          <a className="brand-logo">#Whats The Move?</a>
          <ul id="nav-desktop" className="right hide-on-med-and-down">
            <li>
              <Link to="/login" onClick={()=> this.handleClick()}>
                {button}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  loading() {
    return (
      <nav>
        <div className="nav-wrapper red lighten-1">
          <a href="" className="brand-logo">
            #Whats The Move?
          </a>
          <ul id="nav-desktop" className="right hide-on-med-and-down">
            <li>
              <a>...Loading</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  renderView() {
    const {auth} = this.props;
    if (auth === null) {
      return this.loading();
    } else if (auth === false) {
      return this.header("LogIn");
    } else {
      console.log(auth);
      return this.header("LogOut");
    }
  }
  render() {
    return <div>{this.renderView()}</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, expire: state.expire };
}

function loadData(store) {
  return store.dispatch(fetchCurrentUser(), logOut());
}

export { loadData };
export default connect(mapStateToProps, { fetchCurrentUser, logOut })(Header);
