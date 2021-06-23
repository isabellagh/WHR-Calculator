import React from "react";

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <label>{ this.props.label } </label>
        <input type="text" placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default TextInput


// waist and hip circumference in cm or in