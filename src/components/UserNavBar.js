import { NavLink } from "react-router-dom";
import classes from "./layout/NavBar.module.css";
import { connect } from 'react-redux'
import Logout from "./Logout";
import Welcome from "./Welcome";
import Profile from "./Profile";

const UserNavBar = ({ currentUser, loggedIn }) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {/* <li>
            <NavLink activeClassName={classes.active} to='/clients'>
              My Clients
            </NavLink>
          </li> */}
          <li>
          <NavLink to='/propfile' render={(props) => loggedIn ? <Profile {...props}/> : <Welcome {...props} />}/>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/profile' >
              Profile 
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/my-clients'>
              My clients
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/clients/new'>
              New Client
            </NavLink>
          </li> 
          <li>
            <NavLink activeClassName={classes.active} to='/trainers'>
              Trainers
            </NavLink>
          </li>
          <li>
          { loggedIn ? <Logout/> : null}
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(UserNavBar)