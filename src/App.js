import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Welcome from "./pages/Welcome";
// import Trainers from "./pages/Trainers";
// import TrainerInfo from "./pages/TrainerInfo";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
// import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
import Clients from "./pages/Clients";
// import ClientInfo from "./pages/ClientInfo";
// import ClientNew from "./pages/ClientNew";
// import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: "",
      },
      clients: [],
    };
  }

  componentDidMount() {
      fetch("http://localhost:3000/get_current_user", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then((response) => response.json())
        .then((resp) => {
          if (resp.error) {
            alert(resp.error);
          } else {
            this.setState({
              currentUser: resp.user,
            });
          }
        })
        .catch(console.log);
  }


  handleLoginFormChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value,
      },
    });
  };


  handleLoginFormSubmit = (event) => {
    event.preventDefault();
    const userInfo = this.state.loginForm;
    const headers = {
      method: "POST",
        credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userInfo
      })
    };
    fetch("http://localhost:3000/login", headers)
      .then((response) => response.json())
      .then((resp) => {
        if (resp.error) {
          alert("Invalid credentials");
        } else {
          this.setState({
            currentUser: resp.user,
              loginForm: {
                email: "",
                password: ""
              }
          });
        }
      })
      .catch(console.log);
  };

  logout = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(resp => alert(resp.message))
    this.setState({
      currentUser: null,
      clients: []
    })
  }


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
    const { currentUser } = this.state
    return (
      <div className="App">
        <Navbar title="WHR Calculator" icon="fas fa-heartbeat" />
        <h2>
          {currentUser ? `Logged in as ${currentUser.name}` : "Not logged in"}
        </h2>

        {this.state.currentUser ? (
          <Logout logout={this.logout}/>
        ) : (
          <Login
            handleLoginFormChange={this.handleLoginFormChange}
            handleLoginFormSubmit={this.handleLoginFormSubmit}
            email={this.state.loginForm.email}
            password={this.state.loginForm.password}
          />
        )}
        <button onClick={this.getClients}>My clients</button>
        <Clients clients={this.state.clients} />
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
