import React from 'react';
import { connect } from 'react-redux';
import './trainers-info.css';
// import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';

// import TrainersList from './TrainersList';

const TrainerInfo = (props) => {
  // console.log("trainer props", props);
  // const user = props.users.find(user => user.id === props.match.params.id)

  const user = props.users[props.match.params.id - 1];
  // const user = props.users.filter(user => user.id === props.match.params.id)[0]

  //attrubutes vanish after refreshing the page, fixed

  return (
    <div className='t-info-container'>
      <div class='t-info-wrapper' style={{}}>
        <img
          className='t-info-img'
          src={user ? user.image : null}
          alt={user ? user.image : null}
        />
        <div className='t-info-card'>
          <h1 className='t-info-h1'>{user ? user.name : null}</h1>
          <p class='t-info-p'>
            {user.name} holds a BS in Physical Education as well as a MS in
            Exercise Science and Health Promotion. Is a Certified Strength and
            Conditioning Specialist (CSCS).
          </p>
          <h5>
            <a href={`mailto:${user.email}`} className='t-info-contact'>
              <p className='ti-p'>Let's talk about your goals:</p>
              <p className='ti-email'>
                <i className='ti-icon'>
                  <AiOutlineMail />
                </i>
                {user.email}
              </p>
            </a>
            {/* Got a goal: {user ? user.email : null} */}
          </h5>
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
