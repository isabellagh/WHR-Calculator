import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Welcome from "./pages/Welcome";
import Trainers from "./pages/Trainers";
import Login from "./pages/Login";
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
          <Route exact path="/" component={Welcome} />
            
          <Route exact path="/trainers" component={Trainers} />

          <Route path="/trainers/:id" component={Trainers} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/signup" component={Signup} />

          <Route exact path="/profile" component={Profile} />

          <Route exat path="/clients" component={Clients} />
        </main>
      </div>
    );
  }
}

export default App;


