import React from 'react'

const ClientList = (props) => {

    console.log("props", props);

  return (
      <div>
        <h3> List of clients:</h3>
        {props.clients.map(client => 
          <li key={client.id}> {client.attributes.name}</li>)}
      </div>
  )

}

export default ClientList