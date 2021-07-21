import React from 'react'
// import UserNavBar from './UserNavBar'
import { connect } from 'react-redux'

//! null attributes when page refreshed

const Profile = (props) => (
    <div className="container">
    {/* {console.log("profile", props)} */}
        <br />
        <h1 className="text-center">{props.currentUser && props.currentUser.attributes.name}</h1>
        <img src={props.currentUser.attributes.image} className="img-thumbnail rounded mx-auto d-block" alt="..." />
    </div>
)
const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Profile)