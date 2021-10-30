import React, { Component } from "react";
import './App.css';
import { Route, withRouter, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import TrainersContainer from "./components/TrainersContainer";
import TrainerInfo from "./components/TrainerInfo";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Clients from "./components/clients/Clients";
import NewClientForm from "./components/clients/NewClientForm"
import ClientInfo from "./components/clients/ClientInfo";
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser';
import UserNavBar from "./components/UserNavBar";
import WorkoutForm from "./components/WorkoutForm";
// import Form from "./components/Form";
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
          
          {/* { loggedIn ? 
          <fragment> */}
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/clients/new' component={NewClientForm}/>
          <Route exact path="/clients/:id" render={(routerProps) => <ClientInfo {...routerProps} clients={this.props.clients}/>}></Route>
          <Route exact path='/clients' component={Clients}/>
          <Route exact path="/trainers-profile/:id" render={(routerProps) => <TrainerInfo {...routerProps} users={this.props.users}/>}></Route>
          <Route exact path='/trainers' component={TrainersContainer}/> 
          <Route exact path='/clients/:id/workouts/new' component={WorkoutForm}/>
          : 
          <Route exact path='/signup' render={({history}) => <Signup history={history}/>}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Welcome}/>
          {/* </fragment>} */}
        </Switch>
      </div>
    )
  } 
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App))