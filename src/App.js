import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Login from './components/Login'
// import Logout from './components/Logout'
// import Welcome from "./pages/Welcome";
// import Trainers from "./pages/Trainers";
// import TrainerInfo from "./pages/TrainerInfo";
import Login from "./components/Login";
// import Logout from "./components/Logout";
import Signup from "./components/Signup";
// import Profile from "./pages/Profile";
// import Clients from "./pages/Clients";
// import ClientInfo from "./pages/ClientInfo";
// import ClientNew from "./pages/ClientNew";
// import "./App.css";
import { connect } from 'react-redux'
import MainContainer from './components/MainContainer'
import { getCurrentUser } from './actions/currentUser';
import MyClients from "./components/MyClients";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     loginForm: {
  //       email: "",
  //       password: "",
  //     },
  //     clients: []
  //   };
  // }

  componentDidMount() {
    this.props.getCurrentUser()
  }


 
  // logout = (event) => {
  //   event.preventDefault()
  //   fetch("http://localhost:3000/logout", {
  //     credentials: "include",
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(resp => alert(resp.message))
  //   this.setState({
  //     currentUser: null,
  //     clients: []
  //   })
  // }


  getClients = () => {
    fetch("http://localhost:3000/clients", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((clients) => {
        if (clients.error) {
          alert("not authorized");
        } else {
          this.setState({
            clients,
          });
        }
      })
      .catch(console.log);
  };


  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/my-clients' component={MyClients} />
        </div>
      </div>
    );
  } 

}



export default connect(null, { getCurrentUser })(App)