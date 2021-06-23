import React from "react";
import TextInput from "./TextInput";
import '../styles/Form.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <TextInput />
        </div>
        <div className="row">
          <TextInput />
        </div>
      </div>
    );
  }
}

export default Form;
