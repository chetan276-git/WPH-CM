import React from 'react';

import buttonstyle from './orangebtn.module.scss';

import Link from 'next/link';

const SIZES = ['btn-small', 'btn-medium'];

const ButtonPrimary = (props) => {
  const { value, link, buttonSize } = props;

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <div className={`${buttonstyle.orange_btn}`}>
        <div
          className={`${checkButtonSize} text-white d-inline-block linear_btn text-uppercase fw-medium text-decoration-none linear-gradient-custom`}
        >
          <Link href={link}>{value}</Link>
        </div>
      </div>
    </>
  );
};

export default ButtonPrimary;
