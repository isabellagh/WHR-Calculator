import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import TrainersList from './TrainersList'
import { fetchTrainers } from '../actions/fetchTrainers'

class TrainersContainer extends Component {

  componentDidMount() {
      this.props.fetchTrainers()
  }

  render() {
      return (
          <div>
            <TrainersList users={this.props.users}/>
          </div>
      )
  }
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps, {fetchTrainers})(TrainersContainer)







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
