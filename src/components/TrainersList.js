import React from "react";
// import '../App.css'
import { Link } from "react-router-dom";

const TrainersList = (props) => {
  // console.log("props", props);

  return (
    <div className="container overflow-hidden">
      <hr />
      <h3 className="text-center"> List of our Trainers:</h3>
      <hr />
      <div className="d-inline-block">
      {props.users.map((user) => (
        <div style={{ width: 250 }} key={user.id}>
        <div className="card mb-4 shadow-sm">
          <img src={user.image} className="card-img-top img-thumbnail" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
            <Link to={{ pathname: `/trainers-profile/${user.id}` }}>
              View trainer's full information
            </Link>
          </div>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TrainersList;
