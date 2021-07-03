import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Welcome from "./pages/Welcome";
import Trainers from "./pages/Trainers";
import TrainerInfo from "./pages/TrainerInfo";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
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

  checkLoginStatus() {
    axios.get("http://localhost3000/logged_in") //{withCredentials: true})
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
      // console.log("logged in?", response);
    })
    .catch(error => {
      console.log("check log in error", error);
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
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
          <Route exact path="/" component={Welcome} />
            {/* render={props => ( 
            <Welcome { ...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
           )}
          /> */}

          <Route 
            exact 
            path="/profile" 
            render={props => ( 
              <Profile { ...props} loggedInStatus={this.state.loggedInStatus} />
            )} 
            />

          <Route exact path="/trainers" component={Trainers} />

          <Route exact path="/trainers/:id" component={TrainerInfo} />

          <Route 
          exact 
          path="/login" 
          render={props => ( 
              <Login { ...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
            )}
            />

          <Route exact path="/registration" component={Registration} />

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


