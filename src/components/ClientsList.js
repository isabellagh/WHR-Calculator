import React from "react";
import { Link } from "react-router-dom";
import "./clients-list.css";

const ClientList = (props) => {
  // console.log("props", props);

  return (
    <div className="clients-container">
      <h3 className="clients-h1"> My Clients</h3>
      <div className="clients-wrapper">
        {props.clients.map((client) => (
          <div style={{ width: 250}} key={client.id}>
            <div className="clients-card">
              <img
                src={client.attributes.image}
                className="clients-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{client.attributes.name}</h5>
                <p className="card-text">{client.attributes.email}</p>
                <Link
                  className="clients-profile-btn"
                  to={{ pathname: `/clients/${client.id}` }}
                >
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
