import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import TrainersList from './TrainersList'
import { fetchTrainers } from '../actions/fetchTrainers'
import Profile from './Profile'
import {getCurrentUser} from "../actions/currentUser" 


class TrainersContainer extends Component {

  componentDidMount() {
      this.props.fetchTrainers()
  }

  render() {
      return (
          <div>
            <TrainersList users={this.props.users}/>
            {/* <Route exact path='/profile' component={Profile} currentUser={this.props.currentUser}/> */}

            {/* <Profile /> */}
          </div>
      )
  }
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {fetchTrainers, getCurrentUser})(TrainersContainer)







// import { Link } from "react-router-dom";

// const Trainers = () => {
//   return (
//     <section>
//       <h1>List of our Trainers</h1>
//       <br />
//       <ul>
//         <li>
//           <Link to="/trainers/1">Trainer 1</Link>
//         </li>
//         <li>
//           <Link to="/trainers/2">Trainer 2</Link>
//         </li>
//         <li>
//           <Link to="/trainers/3">Trainer 3</Link>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Trainers;
