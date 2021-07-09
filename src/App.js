import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from './components/Login'
import Logout from './components/Logout'
// import Welcome from "./pages/Welcome";
// import Trainers from "./pages/Trainers";
// import TrainerInfo from "./pages/TrainerInfo";
// import Login from "./pages/Login";
// import Logout from "./pages/Logout";
// import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
// import Clients from "./pages/Clients";
// import ClientInfo from "./pages/ClientInfo";
// import ClientNew from "./pages/ClientNew";
// import "./App.css";
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser';

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


  // getClients = () => {
  //   fetch("http://localhost:3000/clients", {
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((clients) => {
  //       if (clients.error) {
  //         alert("not authorized");
  //       } else {
  //         this.setState({
  //           clients,
  //         });
  //       }
  //     })
  //     .catch(console.log);
  // };


  render() {
    // const { currentUser } = this.props
    return (
      <div className="App">
        <Navbar title="WHR Calculator" icon="fas fa-heartbeat" />
        {/* <Login /> */}
        {/* <Logout /> */}
        {this.props.currentUser ? <Logout /> : <Login />}

        {/* <h2>
          {currentUser ? `Logged in as ${currentUser.name}` : "Not logged in"}
        </h2>

        {currentUser ? (
          <Logout logout={this.logout}/>
        ) : (
          <Login />)} */}

        {/* {currentUser ? (
          <Logout logout={this.logout}/>
        ) : (
          <Login
            /*{/*handleLoginFormChange={this.handleLoginFormChange}
            handleLoginFormSubmit={this.handleLoginFormSubmit}
            email={this.state.loginForm.email}
            password={this.state.loginForm.password}
          />
        )}
        <button onClick={this.getClients}>My clients</button>
        <Clients clients={this.state.clients} /> */}
        {/* <main>
        <Switch>
          <Route exact path="/" component={Welcome} />
          
          <Route exact path="/login" component={Login} />
            
          <Route exact path="/trainers" component={Trainers} />

          <Route exact path="/trainers/:id" component={TrainerInfo} />

          <Route exact path="/signup" component={Signup} />

          <Route exact path="/profile" component={Profile} />

          <Route exact path="/clients" component={Clients} />

          <Route exact path="/clients/new" component={ClientNew} />

          <Route exact path="/clients/:id" component={ClientInfo} />
        </Switch>
        </main> */}
        
      </div>
    );
  } 

}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
} 

// export default connect(mapStateToProps, { getCurrentUser: getCurrentUser })(App);

export default connect(mapStateToProps, { getCurrentUser })(App)