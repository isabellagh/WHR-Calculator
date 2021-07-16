import React, { Component } from "react"
// import { updateNewClientForm } from "../actions/newClientForm";
import { connect } from "react-redux";
import {handleAddClient} from '../actions/myClients'

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


  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleAddClient(this.state)

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
      hip: ""
    });
  };

  // const handleSubmit = event => event.preventDefault()
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={this.handleOnChange}
          value={this.state.name}
        />
        <input
          name="age"
          placeholder="age"
          onChange={this.handleOnChange}
          value={this.state.age}
        />
        <input
          name="email"
          placeholder="email"
          onChange={this.handleOnChange}
          value={this.state.email}
        />
        <input
          name="gender"
          placeholder="gender"
          onChange={this.handleOnChange}
          value={this.state.gender}
        />
        <input
          name="goal"
          placeholder="goal"
          onChange={this.handleOnChange}
          value={this.state.goal}
        />
        <input
          name="image"
          placeholder="image"
          onChange={this.handleOnChange}
          value={this.state.image}
        />
        <input
          name="weight"
          placeholder="weight"
          onChange={this.handleOnChange}
          value={this.state.weight}
        />
        <input
          name="height"
          placeholder="height"
          onChange={this.handleOnChange}
          value={this.state.height}
        />
        <input
          name="waist"
          placeholder="waist"
          onChange={this.handleOnChange}
          value={this.state.waist}
        />
        <input
          name="hip"
          placeholder="hip"
          onChange={this.handleOnChange}
          value={this.state.hip}
        />
        <br />
        <input type="submit" value="Create new client" />
      </form>
    );
  }
}


export default connect(null, {handleAddClient})(NewClientForm);
