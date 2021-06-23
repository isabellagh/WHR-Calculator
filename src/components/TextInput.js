import React from "react";

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <label>Sample Label: </label>
        <input type="text" placeholder="Placeholder" />
      </div>
    );
  }
}

export default TextInput
