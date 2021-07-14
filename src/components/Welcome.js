import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'

const Welcome = () => (
    <div>
      <h4>welcome</h4>
      <span>
      <Link to="/signup">Signup</Link>
      or
      <Link to="/login">Login</Link>
      </span>
    </div>
)


export default Welcome