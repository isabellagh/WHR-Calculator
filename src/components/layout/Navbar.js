import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar bg-primary">
        <h2>
          <i className={this.props.icon} /> {this.props.title}
        </h2>
      </nav>
    )
  }
}



export default Navbar