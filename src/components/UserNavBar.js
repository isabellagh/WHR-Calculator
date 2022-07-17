import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';
import Welcome from './Welcome';
import Profile from './Profile';
import './layout/navbar.css';

const UserNavBar = ({ currentUser, loggedIn }) => {
  return (
    <nav className='fixed'>
      <ul className='main-nav'>
        {/* <li>
            <NavLink  to='/clients'>
              My Clients
            </NavLink>
          </li> */}
        <li>
          <NavLink
            className='anchor'
            to='/profile'
            render={(props) =>
              loggedIn ? <Profile {...props} /> : <Welcome {...props} />
            }
          />
        </li>
        <li>
          <NavLink to='/profile' className='anchor'>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className='anchor' to='/calculator'>
            WHR-Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to='/clients' className='anchor'>
            My Clients
          </NavLink>
        </li>
        <li>
          <NavLink to='/clients/new' className='anchor'>
            Add Client
          </NavLink>
        </li>
        <li>
          <NavLink to='/trainers' className='anchor'>
            Trainers
          </NavLink>
        </li>
        <li className='left anchor'>{loggedIn ? <Logout /> : null}</li>
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

export default connect(mapStateToProps)(UserNavBar);
