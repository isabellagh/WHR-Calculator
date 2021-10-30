import React from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom'
// import TrainersList from './TrainersList';

const TrainerInfo = (props) => {
  // console.log("trainer props", props);
  // const user = props.users.find(user => user.id === props.match.params.id)

  const user = props.users[props.match.params.id - 1];
  // const user = props.users.filter(user => user.id === props.match.params.id)[0]

  //attrubutes vanish after refreshing the page, fixed

  return (
    <div className="container">
      <br /> <br />
      <div class="row g-0 d-inline-block">
        <img className="" src={user ? user.image : null} style={{ width: '400px'}} alt="" />
        <div className="col-md-8 d-inline-block">
          <div className="card-body">
            <h2 className="card-title">{user ? user.name : null}</h2>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <h5 className="card-text">
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
