import React from "react";
import { Link } from "react-router-dom";

const ClientList = (props) => {
  // console.log("props", props);

  return (
    <div className="container">
      <hr />
      <h3 className="text-center"> List of my clients:</h3>
      <hr />
      <div className=" card-group ">
        {props.clients.map((client) => (
          <div style={{ width: 250 }} key={client.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={client.attributes.image}
                className="card-img-top img-thumbnail"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{client.attributes.name}</h5>
                <p className="card-text">{client.attributes.email}</p>
                <Link className="btn btn-primary" to={{ pathname: `/clients/${client.id}` }}>
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
