import React, { Component } from "react";
import NewClientForm from "./NewClientForm";
import { connect } from "react-redux"
import {getCurrentUser} from "../actions/currentUser" 
import {Link} from 'react-router-dom'
import {addClient, getMyClients} from '../actions/myClients'
import ClientsList from "./ClientsList";
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
      {/* Clients container */}
        {/* <NewClientForm handleAddClient={this.handleAddClient}/> */}
        <ClientsList clients={this.props.getCurrentUser && this.props.clients}
     />
    {/* <ClientsList /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      clients: state.clients.clients
  }
}

export default connect(mapStateToProps, {addClient, getCurrentUser, getMyClients}) (Clients)

{/* // export default connect(state => ({clients: state.myClients.clients}), {addClient, getCurrentUser, getMyClients} ) (Clients) */}

{/* 
{this.props.getCurrentUser && this.props.clients.map(client => (
          <p>{client.name}</p>
    ))} */}