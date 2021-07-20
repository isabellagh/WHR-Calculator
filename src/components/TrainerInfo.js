import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import TrainersList from './TrainersList';

const TrainerInfo = (props) => {
  // console.log("trainer props", props);
  // const user = props.users.find(user => user.id === props.match.params.id)

  const user = props.users[props.match.params.id -1]
  // const user = props.users.filter(user => user.id === props.match.params.id)[0]
  
  //!attrubutes vanish after refreshing the page

    return (
      <div>
        <h2>Trainer: {user ? user.name : null}</h2>
          <br />
        <img src={user ? user.image : null} alt=""></img>
        <h4>Email: {user ? user.email : null}</h4>
      </div>
    )
}


const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(TrainerInfo)
















// import { useParams } from 'react-router-dom'
// import TrainersContainer from './TrainersContainer'

// const TrainersInfo = () => {
//   const params = useParams()
//   return (
//     <section>
//       <h1>Trainer Info</h1>
//       {/* <p>{params.users.name}</p> */}
//       <p></p>
//     </section>
//   )
// }

// export default TrainersInfo