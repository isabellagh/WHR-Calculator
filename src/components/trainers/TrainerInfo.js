import React from "react";
import { connect } from "react-redux";
// import './trainers-info.css'
// import { Link } from 'react-router-dom'
// import TrainersList from './TrainersList';

const TrainerInfo = (props) => {
  // console.log("trainer props", props);
  // const user = props.users.find(user => user.id === props.match.params.id)

  const user = props.users[props.match.params.id - 1];
  // const user = props.users.filter(user => user.id === props.match.params.id)[0]

  //attrubutes vanish after refreshing the page, fixed

  return (
    <div className="trainers-container">
      <div
        class="trainers-wrapper"
        style={{  }}
      >
        <img
          className="trainers-img"
          src={user ? user.image : null}
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
        <div className="trainers-card">
          <div className="card-body">
            <h2 className="card-title">{user ? user.name : null}</h2>
            <p class="trainers-p">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <h5 className="trainers-h2">
              Contact me here: {user ? user.email : null}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(TrainerInfo);
