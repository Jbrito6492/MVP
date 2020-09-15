import React from 'react';
import axios from 'axios';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/auth', {
      params: {
        name: this.state.name,
        password: this.state.password
      }
    })
      .then(() => {
        const { name } = this.state
        this.props.changeView(name);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h1>Join</h1>
        <div id="username"><input placeholder="username" name="name" type="text" onChange={this.handleChange} required /></div>
        <div id="password"><input placeholder="password" name="password" type="password" onChange={this.handleChange} required /></div>
        <button type="Submit">Join</button>
      </form>
    )
  }
}

export default Auth;