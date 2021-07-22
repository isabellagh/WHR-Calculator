import React from "react";
import { connect } from "react-redux";

class WorkoutForm extends React.Component {
  render() {
    return (
      <div className="container">
        <form onSubmit>
          <br />
          <h3>Set up a workout</h3>
          <br />
          <div className="form-group">
            <input
              type="date"
              name="workout_date"
              //   value={loginFormData.password}
              placeholder="workout's date"
              className="form-control"
              //   onChange={handleInputChange}
            />
          </div>
          <br />

          <div className="form-group">
            <input
              type="text"
              name="reps"
              //   value={loginFormData.password}
              placeholder="reps"
              className="form-control"
              //   onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              name="sets"
              //   value={loginFormData.password}
              placeholder="sets"
              className="form-control"
              //   onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              name="note"
              //   value={loginFormData.email}
              placeholder="Any notes?"
              className="form-control"
              //   onChange={handleInputChange}
            />
          </div>
          <br />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
          />
          {/* add more imputs */}
        </form>
      </div>
    );
  }
}

export default connect(null)(WorkoutForm);
