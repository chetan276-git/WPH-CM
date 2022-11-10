import React from 'react';

import buttonstyle from './orangebtn.module.scss';

const SIZES = ['btn-small', 'btn-medium'];

const Button = ({ type, value, buttonSize }) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <div className={`${buttonstyle.orange_btn}`}>
        <button
          type={type}
          className={`${checkButtonSize} text-white d-inline-block linear_btn text-uppercase fw-medium text-decoration-none linear-gradient-custom`}
        >
          {value}
        </button>
      </div>
    </>
  );
};

export default Button;
