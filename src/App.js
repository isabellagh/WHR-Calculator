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
import ClientNew from "./pages/ClientNew";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar title="WHR Calculator" icon="fas fa-heartbeat" />
        <main>
        <Switch>
          <Route exact path="/" component={Welcome} />
            
          <Route exact path="/trainers" component={Trainers} />

          <Route exact path="/trainers/:id" component={TrainerInfo} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/signup" component={Signup} />

          <Route exact path="/profile" component={Profile} />

          <Route exact path="/clients" component={Clients} />

          <Route exact path="/clients/new" component={ClientNew} />
        </Switch>
        </main>
        
      </div>
    );
  }
}

export default App;


