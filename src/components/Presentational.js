import React from "react";
import { Link } from "react-router-dom";

const Presentational = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="clearfix">
        <img
          src="https://images.unsplash.com/photo-1576046126313-e93a138bc984?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          class="col-md-6 float-md-end mb-3 ms-md-3"
          alt="..."
        />
        <p>
          "According to the World Health Organization (WHO), having a Waist to Hip Ratio (WHR) of
          over 1.0 may increase the risk of developing conditions that relate to
          being overweight, including heart disease and type 2 diabetes."{" "}
        </p>
        <p>"The WHO advise that a healthy WHR is:"</p>
        <ul>
          <li> 0.85 or less for women</li>
          <li> 0.9 or less for men</li>
        </ul>
        <p>
          "If a person has a high WHR and is carrying excess weight around their
          waist, they may be concerned about the related health risks. To reduce
          these risks, it is a good idea to try to lose weight. The best way to
          lose weight is to consume fewer calories than are burned, usually by
          eating less and exercising more. Eating a healthful diet, reducing
          portion size, and exercising several times a week is a good place to
          start."
        </p>
        <h3>Check your WHR below and choose your <Link to={{ pathname: '/trainers'}}>
        trainer</Link>.</h3>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Presentational;
