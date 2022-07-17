import React, { useState } from 'react';
import './whr-calculator.css';

const Calculator = () => {
  const [whr, setWhr] = useState();
  const [info, setInfo] = useState();
  const [waist, setWaist] = useState();
  const [hip, setHip] = useState();
  const handlewhr = () => {
    let val = (Number(waist) / Number(hip)).toFixed(1);
    setWhr(val);
    if (val < 0.8) {
      setInfo('Low');
    } else if (val > 0.81 && val <= 0.85) {
      setInfo('Moderate');
    } else {
      setInfo('High');
    }

    // men: <94cm
    // woman: <80cm
  };
  return (
    <section className='calculator-section'>
      <h1 className='whr-title'>whr Calculator</h1>
      <div className='whr-wrapper'>
        <div className='whr-input-field'>
          <input
            className='whr-input'
            type='text'
            onChange={(e) => setWaist(e.target.value)}
            placeholder='waist in cm'
          />
        </div>

        <div className='whr-input-field'>
          <input
            className='whr-input'
            type='text'
            onChange={(e) => setHip(e.target.value)}
            placeholder='hip in kg'
          />
        </div>

        <button className='whr-btn' onClick={handlewhr}>
          Calculate
        </button>
        <div className='whr-result'>
          <h1>{whr}</h1>
        </div>
        <div className='whr-result'>
          <h2>{info}</h2>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
