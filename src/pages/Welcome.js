import React, { Component } from "react";
import Form from "../components/Form"
import Registration from "../components/auth/Registration";
import Login from "../components/auth/Login";

class Welcome extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
  // }
  
  // handleSuccessfulAuth(data) {
  //   this.props.handleLogin(data)
  //   this.props.history.push("/profile")
  // }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        <Form />
      </div>
        
    )
  }  
}
  
export default Welcome

