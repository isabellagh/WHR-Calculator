import React, { Component } from "react";
// import '../App.css'
import { Link } from "react-router-dom";

class TrainersList extends Component {
  // console.log("props", props);

  // state = 
  //   {count: 0}


  render() {
    return (
      <div className="container overflow-hidden">
        <hr />
        <h3 className="text-center"> List of our Trainers:</h3>
        <hr />
        <div className="d-inline-block">
          {this.props.users.map((user) => (
            <div style={{ width: 250 }} key={user.id}>
              <div className="card mb-4 shadow-sm">
                <img
                  src={user.image}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>
                  <Link to={{ pathname: `/trainers-profile/${user.id}` }}>
                    View trainer's full information
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
