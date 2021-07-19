import React from 'react'
import { connect } from 'react-redux'
import { deleteClient } from '../actions/myClients';


const ClientInfo = (props) => {
  console.log("clients props", props);

  
  const handleDelete = () => {
    //   debugger
      props.deleteClient(props.match.params.id)
      //   console.log("handleDelete", event.props.clientId);
    }
    
  //   const client = props.clients[props.match.params.id -1]  //!wont show the right id
  const client = props.clients.find(client => client.id === props.match.params.id)
    return (
      <div>
        <h2>{client ? client.attributes.name : null} - 
            {client ? client.attributes.age : null}
        </h2>
        <br />
        <img src={client ? client.attributes.image : null} alt=""></img>
        <br /> <br />
        <button type="button" class="btn btn-danger" onClick={handleDelete}>Delete client</button>
      </div>
      //add other attributes
    )
}


const mapStateToProps = state => {
    console.log("mapstate", state);
  return {
    clients: state.myClients.clients
  }
}

export default connect(mapStateToProps, {deleteClient})(ClientInfo)





