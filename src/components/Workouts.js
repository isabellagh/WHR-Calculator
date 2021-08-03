import React from "react";

const Workouts = (props) => {
  // console.log("workouts props:", props);

  return (
    <div>
      Workouts:
      {props.workouts && props.workouts.map(workout => 
        <li key={workout.id}>
          {workout.note}
        </li>
      )}
    </div>  
  )
};

export default Workouts;
