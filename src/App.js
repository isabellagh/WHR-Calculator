import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Trainers from "./components/Trainers";
import TrainerInfo from "./components/TrainerInfo";
import Login from "./components/Login";
// import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
// import Clients from "./components/Clients";
// import NewClientForm from "./components/NewClientForm"
// import ClientInfo from "./pages/ClientInfo";
// import ClientNew from "./pages/ClientNew";
import { connect } from 'react-redux'
// import MainContainer from './components/MainContainer'
import { getCurrentUser } from './actions/currentUser';
import UserNavBar from "./components/UserNavBar";

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


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
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <UserNavBar/> : <NavBar/> }
        <Switch>
          <Route exact path='/signup' render={({history}) => <Signup history={history}/>}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/profile' component={Profile}/>
          {/* <Route exact path='/clients' component={Clients}/> */}
          {/* <Route exact path='/clients/new' component={NewClientForm}/> */}
          <Route exact path='/trainers' component={Trainers}/>
          <Route exact path="/trainers/:id"><TrainerInfo /></Route>
        </Switch>
      </div>
    );
  } 
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App))