import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Welcome from "./pages/Welcome";
import Trainers from "./pages/Trainers";
import TrainerInfo from "./pages/TrainerInfo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Clients from "./pages/Clients";
import ClientInfo from "./pages/ClientInfo";
import ClientNew from "./pages/ClientNew";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }
  
  render() {
    return (
      <div className="App">
        <Navbar title="WHR Calculator" icon="fas fa-heartbeat" />
        <main>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={props => ( 
              <Welcome { ...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
            )}
          />

          <Route 
            exact 
            path="/profile" 
            render={props => ( 
              <Profile { ...props} loggedInStatus={this.state.loggedInStatus} />
            )} 
            />

          <Route exact path="/trainers" component={Trainers} />

          <Route exact path="/trainers/:id" component={TrainerInfo} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/signup" component={Signup} />

          <Route exact path="/clients" component={Clients} />

          <Route exact path="/clients/new" component={ClientNew} />

          <Route exact path="/clients/:id" component={ClientInfo} />
        </Switch>
        </main>
        
      </div>
    );
  }
}

export default App;


