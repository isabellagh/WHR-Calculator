import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = ({ loginFormData, updateLoginForm, login }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
        
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="email"
          value={loginFormData.email}
          placeholder="Email" 
          onChange={handleInputChange}
          
          />
          <br />
          <input
          type="password"
          name="password"
          value={loginFormData.password}
          placeholder="Password" 
          onChange={handleInputChange}
          
          />
          <br />
          <input
          type="submit"
          value="Log In"
          />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)