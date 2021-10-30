import React from "react";
import Form from "./calculator/Form";
import Presentational from "./Presentational";
import "../App.css";

const Welcome = () => (
  <div>
    <Presentational />
    <div className="overflow-hidden">
      <div className="row d-inline-block">
        <div className="col">
          <div className="p-3 border bg-light">
            <div className="table table-bordered">
              <h3>Check your Waist Hip Ratio here:</h3>
              <hr />
              <br /> <br />
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
