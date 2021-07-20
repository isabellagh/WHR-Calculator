import React from "react";
// import { Link } from "react-router-dom";

const TrainersList = (props) => {
  // console.log("props", props);

  return (
    <div>
      <br />
      <h3>List of our Trainers</h3>
      <br />
      {props.users.map((user) => (
        <div className="card" style={{ width: 250 }} key={user.id}>
          <img src={user.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
            <a href="null" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainersList;
