import React from "react";
import Form from "./Form";
import "../App.css";

const Welcome = () => (
  <div className="container">
    <br />
    <br />
    <br />
    {/* // <hr/>
    //   <h3 className="text-center">Sign up with us if you want to be one of our trainers.</h3>
    //   <hr/>
    //   <br/><br/>
    //   <hr/>
    //   <h3 className="text-center">Calculate your waist to hip ratio and choose one of our trainers to help you get your body where you want.  </h3>

    //   <hr/>
    //   <Form />
      
    // </div> */}
    <div className="clearfix">
      <img
        src="https://images.unsplash.com/photo-1576046126313-e93a138bc984?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        class="col-md-6 float-md-end mb-3 ms-md-3"
        alt="..."
      />

      <p>
        "According to the World Health Organization (WHO), having a WHR of over
        1.0 may increase the risk of developing conditions that relate to being
        overweight, including heart disease and type 2 diabetes."{" "}
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
      <br />
      <br />
    </div>
    <div className="overflow-hidden">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <div className="table table-bordered">
            <h3>Check your Waist Hip Ratio here:</h3>
            <hr/>
            <br/> <br/>
              <tbody className="d-inline-block border-primary">
                <tr>
                  <td>
                    <strong>Health risk</strong>
                  </td>
                  <td>
                    <strong>Men</strong>
                  </td>
                  <td>
                    <strong>Women</strong>
                  </td>
                </tr>
                <tr>
                  <td>Low</td>
                  <td>0.95 or lower</td>
                  <td>0.80 or lower</td>
                </tr>
                <tr>
                  <td>Moderate</td>
                  <td>0.96 - 1.0</td>
                  <td>0.81 - 0.85</td>
                </tr>
                <tr>
                  <td>High</td>
                  <td>1.0 or higher</td>
                  <td>0.86 or higher</td>
                </tr>
              </tbody>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
