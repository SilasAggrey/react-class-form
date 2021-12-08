import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <label>Password</label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}





export default App;
