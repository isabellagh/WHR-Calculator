import React, { Component } from "react";
// import { updateNewClientForm } from "../actions/newClientForm";
import { connect } from "react-redux";
import { handleAddClient } from "../actions/myClients";

class NewClientForm extends Component {
  state = {
    name: "",
    age: "",
    gender: "",
    email: "",
    goal: "",
    image: "",
    weight: "",
    height: "",
    waist: "",
    hip: "",
  };

  // const { name, age, gender, email, goal, image, weight, height, waist, hip } = formData

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddClient(this.state, this.props.history);

    this.setState({
      name: "",
      age: "",
      gender: "",
      email: "",
      goal: "",
      image: "",
      weight: "",
      height: "",
      waist: "",
      hip: "",
    });
  };

  // const handleSubmit = event => event.preventDefault()
  render() {
    return (
      <div className="row d-inline-block">
        <hr />
        <h3> Your client's information.</h3>
        <hr />
        <form onSubmit={this.handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label for="inputName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                name="name"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.name}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputAge" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                name="age"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.age}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                name="email"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.email}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputGender" className="col-sm-2 col-form-label">
              Gender
            </label>
            <div className="col-sm-10">
              <input
                name="gender"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.gender}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputGoal" className="col-sm-2 col-form-label">
              Goal
            </label>
            <div className="col-sm-10">
              <input
                name="goal"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.goal}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputImage" className="col-sm-2 col-form-label">
              Image
            </label>
            <div className="col-sm-10">
              <input
                name="image"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.image}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputWeight" className="col-sm-2 col-form-label">
              Weight
            </label>
            <div className="col-sm-10">
              <input
                name="weight"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.weight}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputHeight" className="col-sm-2 col-form-label">
              Height
            </label>
            <div className="col-sm-10">
              <input
                name="height"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.height}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputWaist" className="col-sm-2 col-form-label">
              Waist
            </label>
            <div className="col-sm-10">
              <input
                name="waist"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.waist}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputHip" className="col-sm-2 col-form-label">
              Hip
            </label>
            <div className="col-sm-10">
              <input
                name="hip"
                className="form-control"
                onChange={this.handleOnChange}
                value={this.state.hip}
              ></input>
            </div>
          </div>
          <br /> <br />
          <input
            class="btn btn-success"
            type="submit"
            value="Create new client"
          />
        </form>
      </div>
    );
  }
}

// NewClientForm.defaultProps = {
//   image: "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
// }

export default connect(null, { handleAddClient })(NewClientForm);
