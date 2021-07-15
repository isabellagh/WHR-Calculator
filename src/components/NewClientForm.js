import React from "react";
import { updateNewClientForm } from "../actions/newClientForm";
import { connect } from "react-redux";

const NewClientForm = ({formData, updateNewClientForm}) => {
  
  const { name, age, gender, email, goal, image, weight, height, waist, hip } = formData
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateNewClientForm(name, value);
  };


  const handleSubmit = event => event.preventDefault()

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={name}
      />
      <input  
        name="age" 
        placeholder="age" 
        onChange={handleChange} 
        value={age}
        />
      <input
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={email}
      />
      <input
        name="gender"
        placeholder="gender"
        onChange={handleChange}
        value={gender}
      />
      <input
        name="goal"
        placeholder="goal"
        onChange={handleChange}
        value={goal}
      />
      <input
        name="image"
        placeholder="image"
        onChange={handleChange}
        value={image}
      />
      <input
        name="weight"
        placeholder="weight"
        onChange={handleChange}
        value={weight}
      />
      <input
        name="height"
        placeholder="height"
        onChange={handleChange}
        value={height}
      />
      <input
        name="waist"
        placeholder="waist"
        onChange={handleChange}
        value={waist}
      />
      <input  
        name="hip" 
        placeholder="hip" 
        onChange={handleChange} 
        value={hip}
        />
      <br />
      <input type="submit" value="Create Client" />
    </form>
  );
};

const mapStateToProps = state => {
  const { name, age, gender, email, goal, image, weight, height, waist, hip } =
    state.NewClientForm;
  return {
    name,
    age,
    gender,
    email,
    goal,
    image,
    weight,
    height,
    waist,
    hip,
  };
};

export default connect(mapStateToProps, { updateNewClientForm })(NewClientForm);

