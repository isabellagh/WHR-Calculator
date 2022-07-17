import React from 'react';
import { connect } from 'react-redux';
import './profile.css';

//! null attributes when page refreshed

const Profile = (props) => (
  <div className='profile-container'>
    {/* {console.log("profile", props)} */}
    <div className='profile-wrapper'>
      <h1 className='profile-h1'>
        {props.currentUser && props.currentUser.attributes.name}
      </h1>
      <img
        src={props.currentUser.attributes.image}
        className='profile-img'
        alt={props.currentUser.attributes.name}
      />
      <h4 className='profile-email'>
        {props.currentUser && props.currentUser.attributes.email}
      </h4>
    </div>
  </div>
);
const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps)(Profile);
