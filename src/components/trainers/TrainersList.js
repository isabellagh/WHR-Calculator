import React, { Component } from "react";
// import '../App.css'
import { Link } from "react-router-dom";
import './trainers-list.css'
class TrainersList extends Component {
  // console.log("props", props);

  // state = 
  //   {count: 0}
 

  render() {
    return (
      <div className="trainers-container">
        <h3 className="trainers-h1"> Meet our trainers</h3>
        <div className="trainers-wrapper">
          {this.props.users.map((user) => (
            <div style={{ width: 250 }} key={user.id}>
              <div className="trainers-card">
                <img
                  src={user.image}
                  className="trainers-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="trainers-h2">{user.name}</h5>
                  <p className="trainers-p">{user.email}</p>
                  <Link className="trainers-profile" to={{ pathname: `/trainers-profile/${user.id}` } }>
                    View trainer's profile
                  </Link>
                </div>
                {/* <p>liked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click me</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TrainersList;
