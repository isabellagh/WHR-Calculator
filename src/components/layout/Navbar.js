import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./Navbar.module.css"

class Navbar extends Component {
  render() {
    return(
      <header>
        <nav className={classes.header}>
          <ul>
            <li> 
              <NavLink activeClassName={classes.active} to='/welcome' className={this.props.icon}> WHR Calculator</NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to='/trainers' className="text-right">Trainers</NavLink> 
            </li>
            <li>
              <NavLink activeClassName={classes.active} to='/signup' className="text-right">Sign Up</NavLink> 
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}



export default Navbar