import React from 'react'
// import UserNavBar from './UserNavBar'
import { connect } from 'react-redux'



const Profile = (props) => (
    <div>
    {console.log("profile", props)}
        <h1>profile</h1>
        <br />
        <p>{props.currentUser && props.currentUser.attributes.name}</p>
        <img src={props.currentUser.attributes.image} className="card-img-top" alt="..." />
    </div>
)
const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Profile)