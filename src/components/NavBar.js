import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import Profile from './Profile';
import './layout/navbar.css';

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <nav className='fixed'>
      <ul className='main-nav'>
        <li>
          <NavLink className='anchor' to='/'>
            KIU
          </NavLink>
        </li>
        <NavLink
          className='anchor'
          to='/'
          render={(props) =>
            loggedIn ? <Profile {...props} /> : <Welcome {...props} />
          }
        />
        <li>
          <NavLink className='anchor' to='/trainers'>
            Trainers
          </NavLink>
        </li>
        <li>
          <NavLink className='anchor' to='/calculator'>
            WHR-Calculator
          </NavLink>
        </li>
        {/* <li className='left'>
          <NavLink activeClassName={classes.active} to='/signup'>
            Signup
          </NavLink>
        </li> */}
        <li className='left'>
          <NavLink className='anchor' to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser,
  };
};

export default connect(mapStateToProps)(NavBar);
