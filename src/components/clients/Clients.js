import React, { Component } from "react";
// import NewClientForm from "./NewClientForm";
import { connect } from "react-redux"
import {getCurrentUser} from "../../actions/currentUser" 
// import {Link} from 'react-router-dom'
import {addClient, getMyClients} from '../../actions/myClients'
import ClientsList from "./ClientsList";
class Clients extends Component {

  componentDidMount() {
      this.props.getMyClients()
  }

  handleAddClient = (client) => {
      this.props.addClient(client)
  }

  render() {
    return (
      <div>
        <ClientsList clients={this.props.getCurrentUser && this.props.clients} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      clients: state.myClients.clients
  }
}

export default connect(mapStateToProps, {addClient, getCurrentUser, getMyClients}) (Clients)
