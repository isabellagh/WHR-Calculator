import React from "react";
import { connect } from "react-redux";
import { deleteClient } from "../actions/myClients";
import { Link } from "react-router-dom";
// import Workouts from "./Workouts";
import WorkoutsContainer from "./WorkoutsContainer";

const ClientInfo = (props) => {
  console.log("clientInfo props", props);

  const handleDelete = () => {
    //   debugger
    props.deleteClient(props.match.params.id, props.history);
    //   console.log("handleDelete", event.props.clientId);
  };

  //   const client = props.clients[props.match.params.id -1]  //!wont show the right id and pic
  const client = props.clients.find(
    (client) => client.attributes.id === parseInt(props.match.params.id, 10)
  );
  return (
    <div className="container">
      <hr />
    {/* ternary */}
    
      <h2 className="text-center">{client ? client.attributes.name : null}</h2>
      <hr />
      <div className=" card-group">
        <div style={{ width: 250 }}>
        {/* key={client.id} */}
          <div className="card mb-4 shadow-sm">
            <img
              src={client ? client.attributes.image : null}
              className="card-img-top img-thumbnail"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title">Gender: {client ? client.attributes.gender : null}</h5>
              <h5 className="card-title">Age: {client ? client.attributes.age : null}</h5>
              <h5 className="card-title">Weight: {client ? client.attributes.weight : null}</h5>
              <h5 className="card-title">Height: {client ? client.attributes.height : null}</h5>
              <h5 className="card-title">Waist: {client ? client.attributes.waist : null}</h5>
              <h5 className="card-title">Hip: {client ? client.attributes.hip : null}</h5>
              <p className="card-text">Goal: {client ? client.attributes.goal : null}</p>
              <p className="card-text">{client ? client.attributes.email : null}</p>
              {/* <Link className="btn btn-success" to={{ pathname: `/clients/:id}/workouts/new` }}> */}
                {/* <Link className="btn btn-success" to={{ pathname: `/clients/${client.id}/workouts/new` }}> */}
                  {/* Add a Workout
                </Link> */}
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
      {/* <WorkoutsContainer client={client}/> */}
      {/* <Workouts /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mapstate", state);
  return {
    clients: state.myClients.clients,
  };
};

export default connect(mapStateToProps, { deleteClient })(ClientInfo);
