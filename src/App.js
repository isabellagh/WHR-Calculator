import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Welcome from "./pages/Welcome";
import Trainers from "./pages/Trainers";
import TrainerInfo from "./pages/TrainerInfo";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Clients from "./pages/Clients";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="WHR Calculator" icon="fas fa-heartbeat" />
        <main>
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/trainers" exact>
              <Trainers />
            </Route>
            <Route path="/trainers/:id">
              <TrainerInfo />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/clients">
              <Clients />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
