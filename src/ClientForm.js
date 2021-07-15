// import React, { Component } from "react";
// import Container from 'react-bootstrap/Container';


// class ClientForm extends Component {
//   state = {
//     clientName: "",
//     clientAge: "",
//     clientGender: "",
//     clientEmail: "",
//     clientImage: "",
//     clientWeight: "",
//     clientHight: "",
//     clientWaist: "",
//     clientHip: "",
//     clientGoal: ""
//   };

//   handleOnChange = (e) => {
//     // whenever the user types something ...
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.handleAddClient(this.state);

//     this.setState({
//       // will clear out the imputs after submition
//       clientName: "",
//       // other attributes
//     });
//   };

//   render() {
//     return (
//     <Container className="p-3">
//       <form onSubmit={this.handleSubmit}>
//       <div className="mb-3">
//         <h1>Add a new client</h1>
//         <br />
//         <label>Name:</label>
//         <input type="text" placeholder="Example input placeholder" name="clientName" value={this.state.clientName} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Age:</label>
//         <input type="text" name="clientAge" value={this.state.clientAge} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Gender:</label>
//         <input type="text" name="clientGender" value={this.state.clientGender} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Email:</label>
//         <input type="text" name="clientEmail" value={this.state.clientEmail} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Image:</label>
//         <input type="text" name="clientImage" value={this.state.clientImage} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Weight:</label>
//         <input type="text" name="clientWeight" value={this.state.clientWeight} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Height:</label>
//         <input type="text" name="clientHeight" value={this.state.clientHeight} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Waist:</label>
//         <input type="text" name="clientWaist" value={this.state.clientWaist} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Hip:</label>
//         <input type="text" name="clientHip" value={this.state.clientHip} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <label>Goal:</label>
//         <textarea type="text" name="clientGoal" value={this.state.clientGoal} onChange={this.handleOnChange} />
//         </div>
//         <div className="mb-3">
//         <input type="submit" value="Submit" />
//         </div>
//       </form>
//       </Container>
//     );
//   }
// }

// export default ClientForm;
