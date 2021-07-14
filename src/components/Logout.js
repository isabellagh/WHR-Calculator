import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import { Redirect } from 'react-router'

const Logout = ({ logout, history }) => {
    
    // const handleSubmit = event => {
        
    // }

    return (
        <form onSubmit={e => {e.preventDefault() 
        logout() 
        return <Redirect to={'/'}/>}}>
          <input
          type="submit"
          value="Log Out"
          />
        </form>
    )
}


export default connect(null, { logout } )(Logout)