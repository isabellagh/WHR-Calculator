import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return(
      <header>
        <nav className="navbar bg-primary">
          <ul>
            <li>           
              <i href='/profile' className={this.props.icon} /> {this.props.title}
            </li>
            <li>
              <a href='/signup'>Sign Up</a> 
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}



export default Navbar