import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    clientName: "",
  };

  handleOnChange = (e) => {
    // whenever the user types something ...
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddClient(this.state);

    this.setState({
      // will clear out the imputs after submition
      clientName: "",
      // other attributes
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type="text" name="clientName" value={this.state.clientName} onChange={this.handleOnChange} />
        <br />
        <label>Age:</label>
        <input type="text" name="clientAge" value={this.state.clientAge} onChange={this.handleOnChange} />
        <br />
        <label>Gender:</label>
        <input type="text" name="clientGender" value={this.state.clientGender} onChange={this.handleOnChange} />
        <br />
        <label>Email:</label>
        <input type="text" name="clientEmail" value={this.state.clientEmail} onChange={this.handleOnChange} />
        <br />
        <label>Goal:</label>
        <input type="text" name="clientGoal" value={this.state.clientGoal} onChange={this.handleOnChange} />
        <br />
        <label>Image:</label>
        <input type="text" name="clientImage" value={this.state.clientImage} onChange={this.handleOnChange} />
        <br />
        <label>Weight:</label>
        <input type="text" name="clientWeight" value={this.state.clientWeight} onChange={this.handleOnChange} />
        <br />
        <label>Height:</label>
        <input type="text" name="clientHeight" value={this.state.clientHeight} onChange={this.handleOnChange} />
        <br />
        <label>Waist:</label>
        <input type="text" name="clientWaist" value={this.state.clientWaist} onChange={this.handleOnChange} />
        <br />
        <label>Hip:</label>
        <input type="text" name="clientHip" value={this.state.clientHip} onChange={this.handleOnChange} />
        <br />
        
        <input type="submit" value="Add a new client" />
      </form>
    );
  }
}

export default ClientForm;
