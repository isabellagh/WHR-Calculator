import React from 'react'
import { NavLink } from 'react-router-dom'
import App from '../App'
import { connect } from 'react-redux'
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
import classes from "./layout/Navbar.module.css"


const NavBar = ({ currentUser }) => {
  return (
    // <div className="NavBar">
    <header>
      <nav className={classes.header}>
        {/* {currentUser ? <strong>Welcome, {currentUser.attributes.name}</strong> : ""} */}
        {/* {currentUser ? <Logout /> : <Login />} */}
          <ul>
            <li> 
              <NavLink activeClassName={classes.active} to='/'> WHR Calculator</NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to='/login' render={() => <Login />}>Log In</NavLink> 
            </li>
            <li>
              <NavLink activeClassName={classes.active} to='/signup' render={() => <Signup />}>Sign Up</NavLink> 
            </li>
            <li>
            {/* {currentUser ? <Logout /> : <Login />} */}
            </li>
          </ul>
      </nav>
    </header>
    // </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)

// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// import classes from "./Navbar.module.css"

// class Navbar extends Component {
//   render() {
//     return(
//       <header>
//         <nav className={classes.header}>
//           <ul>
//             <li> 
//               <NavLink activeClassName={classes.active} to='/' className={this.props.icon}> WHR Calculator</NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName={classes.active} to='/trainers' className="text-right">Trainers</NavLink> 
//             </li>
//             <li>
//               <NavLink activeClassName={classes.active} to='/clients' className="text-right">Clients</NavLink> 
//             </li>
//             <li>
//               <NavLink activeClassName={classes.active} to='/login' className="text-right">Log In</NavLink> 
//             </li>
//             <li>
//               <NavLink activeClassName={classes.active} to='/signup' className="text-right">Sign Up</NavLink> 
//             </li>
//           </ul>
//         </nav>
//       </header>
//     )
//   }
// }



// export default Navbar
