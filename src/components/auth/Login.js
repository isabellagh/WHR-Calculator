import React, { Component } from "react";
import axios from 'axios'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
  }

  // constructor(props) {
  //   super(props);
  //   this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
  // }
  
  handleSuccessfulAuth(data) {
    this.props.handleLogin(data)
    this.props.history.push("/profile")
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    const {email, password} = this.state

    axios.post("http://localhost:3000/sessions", {
        user: {
            email: email,
            password: password
        }
    },
    
    )
    .then(response => {
        if (response.data.logged_in) {
            this.props.handleSuccessfulAuth(response.data)
        }
    })
    .catch(error => {
        console.log("login error", error);
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
