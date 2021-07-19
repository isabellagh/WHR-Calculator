import React from 'react'
import { Link } from 'react-router-dom';

const ClientList = (props) => {

    // console.log("props", props);

  return (
      <div>
        <h3> List of clients:</h3>
        <ol>
        {props.clients.map(client => 
          <li key={client.id}>
            <Link to={{pathname: `/clients/${client.id}`}}> 
              {client.attributes.name}
            </Link>
          </li>)}
        </ol>
      </div>
  )

}

export default ClientList