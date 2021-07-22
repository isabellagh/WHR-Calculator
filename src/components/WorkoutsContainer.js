import React from 'react'
import WorkoutForm from './WorkoutForm'
import Workouts from './Workouts'

class WorkoutsContainer extends React.Component {

    render() {
        return (
            <div>
                WorkoutsContainer:
                <WorkoutForm />
                <Workouts clients={this.props.client && this.props.client.workouts}/>
            </div>
        )
    }
}

export default WorkoutsContainer