
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {

  const authButton = auth ? (<a href='/api/logout'>LogOut</a>) : (<a href='/api/login'>LogIn</a>);

  return (
    <div>
      <li>{authButton}</li>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);