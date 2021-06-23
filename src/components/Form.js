import React from "react";
import TextInput from "./TextInput";
import '../styles/Form.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <TextInput label="Waist" placeholder="Enter your waist circumference" />
        </div>
        <div className="row">
          <TextInput label="Hip" placeholder="Enter your hip circumference" />
        </div>
      </div>
    );
  }
}

export default Form;


// waist and hip circumference in cm or in