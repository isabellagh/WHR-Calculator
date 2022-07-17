import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import { withRouter } from 'react-router';
import './layout/navbar.css';

const Logout = ({ logout, history }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        logout();
        history.push('/');
      }}
    >
      <input className='logout-btn' type='submit' value='Log Out' />
    </form>
  );
};

export default withRouter(connect(null, { logout })(Logout));
