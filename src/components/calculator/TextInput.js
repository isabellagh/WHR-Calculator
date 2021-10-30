import React from "react";
// import Button from "./Button";

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value : '' }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange(event) {
    let inputValue = event.target.value;
    this.setState({ value : inputValue });
    this.props.onChange(inputValue);
  }
}

export default TextInput;

// waist and hip circumference in cm or in
