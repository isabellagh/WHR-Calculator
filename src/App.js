import React, { Component } from "react";
// import Navbar from './components/layout/Navbar'
// import Form from './components/Form';
import { Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Clients from "./pages/Clients";
import Signup from "./pages/Signup";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="WHR Calculator" icon="fas fa-heartbeat" />
        <main>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </main>
      </div>
    );
  }
}

export default App;
