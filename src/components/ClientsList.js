import React from "react";
import { Link } from "react-router-dom";

const ClientList = (props) => {
  // console.log("props", props);

  return (
    <div>
      <h3> List of clients:</h3>
      <div>
        <br />
        <h3>List of your Clients</h3>
        <br />
        {props.clients.map((client) => (
          <div className="card" style={{ width: 250 }} key={client.id}>
            <img
              src={client.attributes.image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{client.attributes.name}</h5>
              <p className="card-text">{client.attributes.email}</p>
              <Link to={{ pathname: `/clients/${client.id}` }}>
                View client information
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
