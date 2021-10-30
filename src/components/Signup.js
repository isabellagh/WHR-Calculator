import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../actions/signupForm";
import { signup } from "../actions/currentUser";

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleUserInfoInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value,
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signupFormData, history);
  };

  return (
    <div className="row d-inline-block">
      <div className="row no-gutters">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <br />
            <h3>Sign Up as a Trainer</h3>
            <br />
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={signupFormData.name}
                placeholder="Name"
                onChange={handleUserInfoInputChange}
                className="form-control"
              />
            </div>
            <br />
            <input
              type="text"
              name="image"
              value={signupFormData.image}
              placeholder="Image URL"
              onChange={handleUserInfoInputChange}
              className="form-control"
            />
            <br />
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={signupFormData.email}
                placeholder="Email"
                onChange={handleUserInfoInputChange}
                className="form-control"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={signupFormData.password}
                placeholder="Password"
                onChange={handleUserInfoInputChange}
                className="form-control"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm,
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
