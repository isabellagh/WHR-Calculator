import React from "react";
import { connect } from "react-redux";
import { deleteClient } from "../actions/myClients";
import { Link } from "react-router-dom";

const ClientInfo = (props) => {
  console.log("clients props", props);

  const handleDelete = () => {
    //   debugger
    props.deleteClient(props.match.params.id, props.history);
    //   console.log("handleDelete", event.props.clientId);
  };

  //   const client = props.clients[props.match.params.id -1]  //!wont show the right id
  const client = props.clients.find(
    (client) => client.id === props.match.params.id
  );
  return (
    <div className="container">
      <hr />
      <h2 className="text-center">{client ? client.attributes.name : null}</h2>
      <hr />
      <div className=" card-group">
        <div style={{ width: 250 }} key={client.id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={client ? client.attributes.image : null}
              className="card-img-top img-thumbnail"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title">Gender: {client.attributes.gender}</h5>
              <h5 className="card-title">Age: {client.attributes.age}</h5>
              <h5 className="card-title">Weight: {client.attributes.weight}</h5>
              <h5 className="card-title">Height: {client.attributes.height}</h5>
              <h5 className="card-title">Waist: {client.attributes.waist}</h5>
              <h5 className="card-title">Hip: {client.attributes.hip}</h5>
              <p className="card-text">Goal: {client.attributes.goal}</p>
              <p className="card-text">{client.attributes.email}</p>
                <Link className="btn btn-success" to={{ pathname: `/workouts/new` }}>
                  Add a Workout
                </Link>
                <br/> <br/>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete client
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    //add other attributes
  );
};

const mapStateToProps = (state) => {
  console.log("mapstate", state);
  return {
    clients: state.myClients.clients,
  };
};

export default connect(mapStateToProps, { deleteClient })(ClientInfo);
