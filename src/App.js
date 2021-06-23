import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="WHR Calculator" icon="fas fa-heartbeat" />
        <Form />        
      </div>
    )
  }
}

export default App;
