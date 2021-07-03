import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Welcome from "./pages/Welcome";
// import Trainers from "./pages/Trainers";
// import TrainerInfo from "./pages/TrainerInfo";
import Login from "./pages/Login";
// import Logout from "./pages/Logout";
// import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
// import Clients from "./pages/Clients";
// import ClientInfo from "./pages/ClientInfo";
// import ClientNew from "./pages/ClientNew";
// import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      }
      // clients: []
    }
  }

  // componentDidMount() {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     fetch("http://localhost:3001/get_current_user", {
  //       credentials: "include", 
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(resp => {
  //       if (resp.error) {
  //         alert(resp.error)
  //       } else {
  //         this.setState({
  //           currentUser: resp.user
  //         })
  //       }
  //     })
  //     .catch(console.log)
  //   }
  // }

  handleLoginFormChange = event => {
    const { name, value } = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  handleLoginFormSubmit = event => {
    event.preventDefault()
    const userInfo = this.state.loginForm
    const headers = {
      method: "POST",
    //   credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
     fetch("http://localhost:3000/login", headers)
      .then(response => response.json())
      .then(resp => {
      if (resp.error) {
        alert("Invalid credentials")
      } else {
        this.setState({
          currentUser: resp
  //         loginForm: {
  //           email: "",
  //           password: ""
  //         }
        })
      }
    })
      .catch(console.log)
      
  }
  
  // logout = event => {
  //   event.preventDefault()
  //   fetch("http://localhost:3001/logout", {
  //     crendetials: "include",
  //     headers: {
  //       method: "DELETE",
  //       "Content-Type": "aaplication/json"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(console.log)
  //   this.setState({
  //     currentUser: null,
  //     secrets: []
  //   })
  // }

  // getSecrets = () => {
  //   const token = localStorage.getItem("token")
  //   fetch("http://localhost:3001/secrets", {
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(secrets => {
  //     if (secrets.error) {
  //       alert("Not authorized for those secrets")
  //     } else {
  //       this.setState({
  //         secrets
  //       })
  //     }
  //   })
  //   .catch(console.log)
  // }
  
  render() {
    // const { currentUser } = this.state
    return (
      <div className="App">
        <Navbar title="WHR Calculator" icon="fas fa-heartbeat" />
        <Login
          handleLoginFormChange={this.handleLoginFormChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          email={this.state.loginForm.email}
          password={this.state.loginForm.password}
          />
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

export default App;


