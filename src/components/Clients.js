import React, { Component } from "react";
import NewClientForm from "./NewClientForm";
import { connect } from "react-redux"
import {getCurrentUser} from "../actions/currentUser" 
import {Link} from 'react-router-dom'
import {addClient, getMyClients} from '../actions/myClients'
class Clients extends Component {

  componentDidMount() {
      this.props.getMyClients()
  }

  handleAddClient = (client) => {
      this.props.addClient(client)
  }

//   to={{pathname: `/clients/${client.id}`}}

  render() {
    return (
      <div>    {/*render the results from the form*/}
        <NewClientForm handleAddClient={this.handleAddClient}/>
        {this.props.getCurrentUser && this.props.clients.map(client => (
          <p>{client.name}</p>
    ))}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {clients: state.myClients}
// }

// export default connect(mapStateToProps, {getCurrentUser})(Clients)

export default connect(state => ({clients: state.myClients.clients}), {addClient, getCurrentUser, getMyClients} ) (Clients)