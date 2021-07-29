import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import "../styles/Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { whr: "", waist: 1, hip: 1 }
    this.waistChange = this.waistChange.bind(this);
    this.hipChange = this.hipChange.bind(this);
  }

  waistChange(waistValue) {
    this.setState({ waist: waistValue });
  }

  hipChange(hipValue) {
    this.setState({ hip: hipValue });
  }

  render() {
    return (
      <div className="row d-inline-block">
        <div className="row">
          <h3>Your WHR is: {this.state.whr}</h3>
          <TextInput label="Waist" placeholder="Waist circunf." onChange={this.waistChange}
          />
        </div>
        <div className="row">
          <h3>{this.state.whrClass}</h3>
          <TextInput label="Hip" placeholder="Hip circunf." onChange={this.hipChange}
          />
        </div>
        <button className="row">
          <Button label="SUBMIT" onClick={this.computeWhr} />
        </button>
      </div>
    );
  }

  computeWhr = () => {
      console.log(this.state);
    let whrValue = this.state.waist / this.state.hip
    this.setState({ whr: whrValue })
    console.log("whrvalue", whrValue);
    // let whrClass = this.getWhr(whrValue)
    // this.setState({ whr: whrClass })
  }
  // results for women
  // getWhr(whr) {
  //   if (whr < 0.8) {
  //     return "Low";
  //   }
  //   if (whr > 0.79 && whr < 0.86) {
  //     return "Moderate";
  //   }
  //   if (whr > 0.85) {
  //     return "High";
  //   }
  // }
}

export default Form;

// waist and hip circumference in cm or in
