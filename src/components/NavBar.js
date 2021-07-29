import { NavLink } from "react-router-dom";
import classes from "./layout/NavBar.module.css";
import { connect } from 'react-redux'
import Welcome from "./Welcome";
import Profile from "./Profile";

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <header className={classes.header}>
      <nav className="d-inline-block">
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/'>
              Welcome
            </NavLink>
          </li>
          <NavLink to='/' render={(props) => loggedIn ? <Profile {...props}/> : <Welcome {...props} />}/>
          <li>
            <NavLink activeClassName={classes.active} to='/trainers'>
              Trainers
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/signup'>
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/login'>
              Login
            </NavLink>
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

export default connect(mapStateToProps)(NavBar)