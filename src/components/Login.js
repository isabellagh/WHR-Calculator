import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
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
        login(loginFormData, history)
        
    }

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
        <br/>
          <h3>Log in</h3>
          <br/>
          <div className="form-group">
          <input
          type="text"
          name="email"
          value={loginFormData.email}
          placeholder="Enter Email" 
          className="form-control"
          onChange={handleInputChange}
          />
           </div>
            <br/>
           <div className="form-group">
          <input
          type="password"
          name="password"
          value={loginFormData.password}
          placeholder="Password" 
          className="form-control"
          onChange={handleInputChange}
          />
            </div>
            <br/>
          <input
          type="submit"
          value="Log In"
          className="btn btn-primary btn-block"
          />
         
        </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)