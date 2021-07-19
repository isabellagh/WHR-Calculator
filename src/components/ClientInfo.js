import React from 'react'
import { connect } from 'react-redux'


const ClientInfo = (props) => {
  console.log("clients props", props);

//   const client = props.clients[props.match.params.id -1]  //!wont show the right id

  const client = props.clients.filter(client => client.id === props.match.params.id)[0]
    return (
      <div>
        <h2>{client ? client.attributes.name : null} - 
            {client ? client.attributes.age : null}
        </h2>
        <br />
        <img src={client ? client.attributes.image : null} alt=""></img>
      </div>
      //add other attributes
    )
}

// NOT MATCHING PARAMS

const mapStateToProps = state => {
  return {
    clients: state.clients.clients
  }
}

export default connect(mapStateToProps)(ClientInfo)





