import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'

const Signup = ({ signupFormData, updateSignupForm, signup }) => {
    const handleUserInfoInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
        
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="name"
          value={signupFormData.name}
          placeholder="Name" 
          onChange={handleUserInfoInputChange}
          
          />
          <input
          type="text"
          name="image"
          value={signupFormData.image}
          placeholder="Image URL" 
          onChange={handleUserInfoInputChange}
          
          />
          <input
          type="text"
          name="email"
          value={signupFormData.email}
          placeholder="Email" 
          onChange={handleUserInfoInputChange}
          
          />
          <input
          type="password"
          name="password"
          value={signupFormData.password}
          placeholder="Password" 
          onChange={handleUserInfoInputChange}
          
          />
          <input
          type="submit"
          value="Sign Up"
          />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)