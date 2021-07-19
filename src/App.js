import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import TrainersContainer from "./components/TrainersContainer";
import TrainerInfo from "./components/TrainerInfo";
import Login from "./components/Login";
// import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Clients from "./components/Clients";
import NewClientForm from "./components/NewClientForm"
import ClientInfo from "./components/ClientInfo";
// import ClientNew from "./pages/ClientNew";
import { connect } from 'react-redux'
// import MainContainer from './components/MainContainer'
import { getCurrentUser } from './actions/currentUser';
import UserNavBar from "./components/UserNavBar";
// import NewClientForm from './NewClientForm'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


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
          <Route exact path='/clients/new' component={NewClientForm}/>
          <Route exact path="/clients/:id" render={(routerProps) => <ClientInfo {...routerProps} clients={this.props.clients}/>}></Route>
          <Route exact path='/clients' component={Clients}/>
          <Route exact path="/trainers/:id" render={(routerProps) => <TrainerInfo {...routerProps} users={this.props.users}/>}></Route>
          <Route exact path='/trainers' component={TrainersContainer}/>
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