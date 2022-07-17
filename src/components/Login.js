import React from 'react';
import './login.css';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';
import { FaUserAlt, FaLock, FaFacebook } from 'react-icons/fa';

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value,
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginFormData, history);
  };

  return (
    <div className='container-login'>
      <div className='forms-container'>
        <div className='signin-signup'>
          <form onSubmit={handleSubmit} className='signin-form'>
            <h3 className='title-signin'>Log in</h3>
            <div className='input-field'>
              <i className='FiUser'>
                <FaUserAlt />
              </i>
              <input
                type='text'
                name='email'
                value={loginFormData.email}
                placeholder='Enter Email'
                onChange={handleInputChange}
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input
                type='password'
                name='password'
                value={loginFormData.password}
                placeholder='Password'
                onChange={handleInputChange}
              />
            </div>
            <input type='submit' value='Log In' className='btn-login' />
            <div className='signup-link'>
              <a href='/signup' className='here'>
                | Sign Up as a Trainer |
              </a>
            </div>
            {/* <p className='social-text'></p>
            <div className='social-media'>
              Or Signin with Facebook
              <a href='/' className='social-icon'>
                <i>
                  <FaFacebook />
                </i>
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
