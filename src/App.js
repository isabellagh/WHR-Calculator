import React, { Component } from 'react';
// import Navbar from './components/layout/Navbar'
// import Form from './components/Form';
import { Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import Clients from './pages/Clients'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
      </div>
    )
  }
}

export default App;
