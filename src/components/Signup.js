import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentUser';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsImageFill } from 'react-icons/bs';
import './signup.css';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleUserInfoInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value,
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signupFormData, history);
  };

  return (
    <div className='container-login'>
      <div className='forms-container'>
        <div className='signin-signup'>
          <form onSubmit={handleSubmit} className='signin-form'>
            <h3 className='title-signin'>Sign Up as a Trainer</h3>
            <br />
            <div className='input-field'>
              <i className='FiUser'>
                <FaUserAlt />
              </i>
              <input
                type='text'
                name='name'
                value={signupFormData.name}
                placeholder='Name'
                onChange={handleUserInfoInputChange}
              />
            </div>
            <div className='input-field'>
              <i className='FiUser'>
                <MdEmail />
              </i>
              <input
                type='text'
                name='email'
                value={signupFormData.email}
                placeholder='Enter Email'
                onChange={handleUserInfoInputChange}
              />
            </div>
            <div className='input-field'>
              <i className='FiUser'>
                <BsImageFill />
              </i>
              <input
                type='text'
                name='image'
                value={signupFormData.image}
                placeholder='Image URL'
                onChange={handleUserInfoInputChange}
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input
                type='password'
                name='password'
                value={signupFormData.password}
                placeholder='Password'
                onChange={handleUserInfoInputChange}
              />
            </div>

            <input type='submit' value='Sign Up' className='btn-login' />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm,
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
