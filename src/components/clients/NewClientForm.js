import React, { Component } from 'react';
// import { updateNewClientForm } from "../actions/newClientForm";
import { connect } from 'react-redux';
import { handleAddClient } from '../../actions/myClients';
import './new-client-form.css';
class NewClientForm extends Component {
  state = {
    name: '',
    age: '',
    gender: '',
    email: '',
    goal: '',
    image: '',
    weight: '',
    height: '',
    waist: '',
    hip: '',
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
      name: '',
      age: '',
      gender: '',
      email: '',
      goal: '',
      image: '',
      weight: '',
      height: '',
      waist: '',
      hip: '',
    });
  };

  // const handleSubmit = event => event.preventDefault()
  render() {
    return (
      <section className='new-client-section'>
        <header className='new-client-header'>
          <h3 className='new-client-h1'> Your client's information.</h3>
        </header>
        <br />
        <form onSubmit={this.handleSubmit} className='client-form-container'>
          {/*  */}
          <div className=''>
            {/* <label for='inputName' className=''>
              Name
            </label> */}
            <input
              placeholder='Name'
              name='name'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.name}
            ></input>
          </div>
          {/*  */}
          <div className=''>
            {/* <label for='inputAge' className=''>
              Age
            </label> */}
            <input
              placeholder='Age'
              name='age'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.age}
            ></input>
          </div>
          {/*  */}
          <div className=''>
            {/* <label for='inputEmail' className=''>
              Email
            </label> */}
            <input
              placeholder='Email'
              name='email'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.email}
            ></input>
          </div>
          {/*  */}
          <div className=''>
            {/* <label for='inputGender' className=''>
              Gender
            </label> */}
            <input
              placeholder='Gender'
              name='gender'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.gender}
            ></input>
          </div>
          {/*  */}
          <div className=''>
            {/* <label for='inputGoal' className=''>
              Goal
            </label> */}
            <input
              placeholder='Goal'
              name='goal'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.goal}
            ></input>
          </div>
          {/*  */}
          <div className=''>
            {/* <label for='inputImage' className=''>
              Image
            </label> */}
            <input
              placeholder='Image'
              name='image'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.image}
            ></input>
          </div>
          {/*  */}
          <div className=''>
            {/* <label for='inputWeight' className=''>
              Weight
            </label> */}
            <input
              placeholder='Weight'
              name='weight'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.weight}
            ></input>
          </div>
          <div className=''>
            {/* <label for='inputHeight' className=''>
              Height
            </label> */}
            <input
              placeholder='Height'
              name='height'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.height}
            ></input>
          </div>
          {/*  */}
          <div className=''>
            {/* <label for='inputWaist' className=''>
              Waist
            </label> */}
            <input
              placeholder='Waist'
              name='waist'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.waist}
            ></input>
          </div>
          {/*  */}
          <div className=''>
            {/* <label for='inputHip' className=''>
              Hip
            </label> */}
            <input
              placeholder='Hip'
              name='hip'
              className='client-form-input'
              onChange={this.handleOnChange}
              value={this.state.hip}
            ></input>
          </div>
          {/*  */}
          <div className='client-btn-div'>
            <input
              class='new-client-btn'
              type='submit'
              value='Add new client'
            />
          </div>
        </form>
      </section>
    );
  }
}

export default connect(null, { handleAddClient })(NewClientForm);
