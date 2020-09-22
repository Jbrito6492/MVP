import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
font-family: sans-serif;
font-size: 1.3rem;
border: none;
border-radius: 5px;
padding: 7px 10px;
background: black;
color: white;
&:hover {
  background: red;
}
`;

const Input = styled.div`
font-family: sans-serif;
max-width: 1100px;
background: #fff;
margin: 30px auto;
overflow: hidden;
border-radius: 5px;
`;

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
        <h1>sign-in</h1>
        <Input id="username"><input size="40" placeholder="username" name="name" type="text" onChange={this.handleChange} required /></Input>
        <Input id="password"><input size="40" placeholder="password" name="password" type="password" onChange={this.handleChange} required /></Input>
        <Button type="Submit">Join</Button>
      </form>
    )
  }
}

export default Auth;