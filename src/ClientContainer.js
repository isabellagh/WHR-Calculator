import React, {Component} from 'react'
import ClientForm from './ClientForm'
import {connect} from 'react-redux'

class ClientContainer extends Component {
  handleAddClient = (client) => {
    this.props.dispatch({type: "ADD_CLIENT", client: client})
  }

  render() {
      return(
          <div>
              {/* render the data from the form  */}
              <ClientForm handleAddClient={this.handleAddClient}/>   
              {this.props.clients.map(client => (
                  <p>{client.clientName} {client.clientAge}</p>
              ))}
          </div>
      )
  }
}

const mapStateToProps = state => {
    return {clients: state.clients}
}


export default connect(mapStateToProps) (ClientContainer)