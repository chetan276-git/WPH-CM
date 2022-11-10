import React from 'react';

import getstyle from './getabout.module.scss';

import Image from 'next/image';
import Link from 'next/link';

const GetStartedAbout = ({
  subtitle,
  title,
  description,
  btnlink,
  image,
  btnname,
}) => {
  return (
    <>
      <section className={`${getstyle.heading_getstartedpage}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 offset-lg-1'>
              <div className='content_wrapper'>
                <span className='sub-heading position-relative text-uppercase d-inline-block fw-medium text-gradient-sky-blue-pink '>
                  {subtitle}
                </span>
                <h5>{title}</h5>
                <p>{description}</p>
                <span className='position-relative text-uppercase animation-button text-white mt-4 d-inline-block'>
                  <Link href={btnlink}>{btnname}</Link>
                </span>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='main-image'>
                <Image
                  src={`/images/${image}`}
                  width='100%'
                  height='90%'
                  layout='responsive'
                  loading='lazy'
                  objectFit='cover'
                  className='rounded'
                  alt='Medical Image'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStartedAbout;
