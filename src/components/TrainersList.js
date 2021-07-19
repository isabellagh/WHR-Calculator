import React from 'react'
import { Link } from 'react-router-dom';

const TrainersList = (props) => {

    // console.log("props", props);

  return (
      <div>
        <h3>List of our Trainers</h3>
        <ol>
          {props.users.map(user => 
          <li key={user.id}> 
            <Link to={{pathname: `/trainers/${user.id}`}}>
            {user.name}
            </Link>
          </li>)}
        </ol>
      </div>
  )

}

export default TrainersList